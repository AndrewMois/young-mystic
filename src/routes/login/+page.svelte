<script>
	export let form;
</script>


<h2>Young Mystic Library</h2>
<h3>Login</h3>

<form method='post' action='?/login'>

	<div class='form-item'>
		{#if form?.errorMessage}
			<p>{form.errorMessage}</p>
		{/if}
	</div>

	<div class='form-item'>
		{#if form?.pending}
			<p>You are pending! Wait till we approve you</p>
		{/if}
	</div>

	<div class='form-item'>
		{#if form?.blocked}
			<p>You are blocked!</p>
		{/if}
	</div>

	<div class='form-item'>
		<label for='email'>Email<sup><small>*</small></sup></label>
		<input value={form?.email?? ''} id='email' type='email' name='email'
					 required />
	</div>

	<div class='form-item'>
		<label for='password'>Password<sup><small>*</small></sup></label>
		<input id='password' type='password'
					 name='password' required />
	</div>

	<div class='form-item'>
		<button type='submit'>Log in</button>
	</div>

	<div class='form-item'>
		<p>New user? <a href='/register'>Register</a></p>
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

</style>