// noinspection UnnecessaryLocalVariableJS

import bcrypt from 'bcrypt';

export const returnAllUsers = async (collection) => {
	const Users = await collection.find().toArray();
	//console.log("Result",Users);
	return Users;
};

export const returnYLIDsList = async (collection) => {
	const projection = { ylid: 1, _id: 0 };
	const users = await collection.find().project(projection).toArray();
	const userList = users.map((user) => user.ylid.toString());
	return userList.sort();
};

export const returnEmailsList = async (collection) => {
	const projection = { email: 1, _id: 0 };
	const users = await collection.find().project(projection).toArray();
	const emailList = users.map((user) => user.email.toString());
	return emailList;
};

export const registerUser = async (collection, user) => {
	const register = await collection.insertOne(user);
	return register;
};

export const bulkAddUsers = async (collection, users) => {
	const register = await collection.insertMany(users);
	return register;
};

export const deleteAll = async (collection) => {
	const deleteMany = await collection.deleteMany();
	return deleteMany;
};

export const findUserById = async (collection) => {
	const Users = await collection.find().toArray();
	//console.log("Result",Users);
	return Users;
};

export const findUserByYLID = async (collection, ylid) => {
	const User = await collection.find({ URL: ylid }).toArray();
	console.log('Result', User[0]);
	return JSON.parse(JSON.stringify(User[0], (key, value) => (key === '_id' ? value.toString(value) : value)));
};

export const findUserByEmail = async (collection, email) => {
	const projection = { _id: 0, firstName: 1, name: 1, email: 1, ylid: 1 };

	try {
		const users = await collection.find({ email: email }).project(projection).toArray();

		if (users.length === 0) {
			return null; // User not found
		}

		const user = users[0];
		return JSON.parse(JSON.stringify(user, (key, value) => (key === '_id' ? value.toString(value) : value)));
	} catch (error) {
		console.error('Error finding user by email:', error.message);
		return null;
	}
};

export const findUserByEmailWithPassword = async (collection, email) => {
	const projection = { email: 1, _id: 0, password: 1, ylid: 1 };

	try {
		const users = await collection.find({ email: email }).project(projection).toArray();

		if (users.length === 0) {
			return null; // User not found
		}

		const user = users[0];
		return JSON.parse(JSON.stringify(user, (key, value) => (key === '_id' ? value.toString(value) : value)));
	} catch (error) {
		console.error('Error finding user by email:', error.message);
		return null;
	}
};

export const onUserStyledPage = (url) => {
	const nonUserStyledRoutes = ['', '/', '/signup', '/login'];
	return nonUserStyledRoutes.includes(url);
};

export const createUserToRegister = async (form) => {
	const hashedPassword = await bcrypt.hash(form.password, 12);
	const name = `${form.firstName.toString()} ${form.lastName.toString()}`;
	const user = {
		name: name,
		firstName: form.firstName.toString(),
		lastName: form.lastName.toString(),
		email: form.email.toString(),
		password: hashedPassword,
		ylid: form.ylid.toString(),
		lang: form.lang.toString(),
		blocked: false,
		pending: true,
		registerDate: new Date(),
	};
	return user;
};

export const checkPassword = async (collection, email, password) => {
	try {

		const projection = { _id: 0, password: 1 };
		const userJSON = await collection.find({ email: email }).project(projection).toArray();
		const user = JSON.parse(JSON.stringify(userJSON[0], (key, value) => (key === '_id' ? value.toString(value) : value))).password;

		if (!user || user.length === 0) {
			return false; // User not found
		}
		const passwordMatch = await bcrypt.compare(password, user);

		return passwordMatch;
	} catch (error) {
		console.error('Error checking password:', error.message);
		return false;
	}
};

/**
 * @param {Object} collection
 * @param {String} email
 * @returns {boolean | null} null if user not found, false if user not blocked, true if user blocked
 */
export const checkBlockedbyEmail = async (collection, email) => {
	const projection = { blocked: 1 };

	try {
		const users = await collection.find({ email: email }).project(projection).toArray();

		if (users.length === 0) {
			return null; // User not found
		} else if (users[0].blocked === false) {
			return false;
		} else if (users[0].blocked === true) {
			return true;
		}

	} catch (error) {
		console.error('Error finding if user is blocked by email:', error.message);
		return null;
	}
};

/**
 * @param collection
 * @param email
 * @returns {Promise<*|null>}
 */
export const getLangByEMail = async (collection, email) => {
	const projection = { lang: 1 };

	try {
		const users = await collection.find({ email: email }).project(projection).toArray();
		if (users.length === 0) {
			return null; // User not found
		}
		return users[0].lang;
	} catch (error) {
		console.error('Error finding if user is blocked by email:', error.message);
		return null;
	}
};

export const changeLangByEMail = async (collection, email, newLang) => {
	const filter = { email: email };
	const updateDoc = {
		$set: {
			lang: newLang,
		},
	};
	const options = { upsert: false };

	try {
		const result = await collection.updateOne(filter, updateDoc, options);
		return result;
	} catch (error) {
		console.error('Error changing language by email:', error.message);
		return null;
	}
};

/**
 * @param {Object} collection
 * @param {String} email
 * @returns {boolean | null} null if user not found, false if user not pending, true if user pending
 */
export const checkPendingbyEmail = async (collection, email) => {
	const projection = { pending: 1 };

	try {
		const users = await collection.find({ email: email }).project(projection).toArray();

		if (users.length === 0) {
			return null; // User not found
		} else if (users[0].pending === false) {
			return false;
		} else if (users[0].pending === true) {
			return true;
		}

	} catch (error) {
		console.error('Error finding if user is pending by email:', error.message);
		return null;
	}
};