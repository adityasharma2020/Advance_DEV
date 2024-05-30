import React from 'react';

const SignIn = () => {
	function handleSubmit() {
		console.log('hello');
	}
	return (
		<div>
			<input type='text' placeholder='username' /><input/>
			<input type='text' placeholder='password' /><input/>
			<button onClick={handleSubmit}>submit</button>
		</div>
	);
};

export default SignIn;
