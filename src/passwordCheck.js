export function checkPassword(password) {
	// Regular expressions for uppercase, lowercase, special characters, and numbers
	const uppercaseRegex = /[A-Z]/;
	const lowercaseRegex = /[a-z]/;
	// const specialCharRegex = /[\W_]/; // This includes non-word characters and underscores
	const numberRegex = /\d/;

	// Check the length of the password
	if (password.length < 8) {
		return false;
	}

	// Check for at least one uppercase letter
	if (!uppercaseRegex.test(password)) {
		return false;
	}

	// Check for at least one lowercase letter
	if (!lowercaseRegex.test(password)) {
		return false;
	}

	/* Check for at least three special characters or numbers*/
	let specialCharAndNumberCount = 0;
	for (let i = 0; i < password.length; i++) {
		if (numberRegex.test(password[i])) {
			specialCharAndNumberCount++;
		}
	}
	if (specialCharAndNumberCount < 1) {
		return false;
	}


	// If all requirements are met, return true
	return true;
}
