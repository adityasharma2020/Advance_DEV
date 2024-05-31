'use server';

import client from '@/db';
async function signUp(username: string, password: string) {
	try {
		await client.user.create({
			data: {
				username: username,
				password: password,
			},
		});

		return true;
	} catch (error) {
		return false;
	}
}

export default signUp;
