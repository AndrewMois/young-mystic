<script>
	export let form;
</script>

<svelte:head>
	<title>Регистрация | YM</title>
	<meta name='description' content='Библиотека эфирных масел Young Living' />
</svelte:head>

<h2>Young Mystic Library</h2>
<h3>Register</h3>

<form method='post' action='?/signup'>

	<div class='form-item'>
		{#if form?.errorMessages}
			<p>Oups, there is some errors:</p>
			<ul>
				{#each form.errorMessages as message}
					<li>{message}</li>
				{/each}
			</ul>
		{/if}
	</div>

	<div class='form-item'>
		<label for='firstName'>First name<sup><small>*</small></sup></label>
		<input value={form?.firstName?? ''} id='firstName' type='text' name='firstName' required />
	</div>

	<div class='form-item'>
		<label for='lastName'>Last name<sup><small>*</small></sup></label>
		<input value={form?.lastName?? ''} id='lastName' type='text' name='lastName' required />
	</div>

	<div class='form-item'>
		<label for='email'>Email<sup><small>*</small></sup></label>
		<input class:fieldError={form?.emailUsed} value={form?.email?? ''} id='email' type='email' name='email'
					 required />
	</div>

	<div class='form-item'>
		<label for='password'>Password<sup><small>*</small></sup></label>
		<input class:fieldError={form?.weakPassword || form?.passwordDiffer} id='password' type='password'
					 name='password' required />
	</div>

	<div class='form-item'>
		<label for='passwordRepeat'>Repeat password<sup><small>*</small></sup></label>
		<input class:fieldError={form?.passwordDiffer} id='passwordRepeat' type='password' name='passwordRepeat'
					 required />
	</div>

	<div class='form-item'>
		<label for='ylid'>Young Living ID<sup><small>*</small></sup></label>
		<input value={form?.ylid?? ''} class:fieldError={form?.idTaken} id='ylid' type='text' name='ylid' required />
	</div>

	<div class='form-item'>
		<button type='submit'>Sign Up</button>
	</div>

	<div class='form-item'>
		<p>Already have an account? <a href='/login'>Login</a></p>
	</div>
</form>

<style>
    div {
        margin-bottom: .5em;
    }

    label {
        padding-right: .5em;
    }

    small {
        padding-left: .5em;
        color: #ff0000;
    }

    button {
        width: 100%;
        transition: all 0.3s ease-in;
    }

    button:hover {
        cursor: pointer;
        text-decoration: underline;
        background-color: #4d4c4c;
        transition: all 0.3s ease-in;
    }

    .form-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .fieldError {
        outline: 2px solid #ff0000;
    }
</style>