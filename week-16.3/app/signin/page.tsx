'use client';

import { signIn, signOut } from 'next-auth/react';
import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
	const router = useRouter();
	return (
		<div>
			<div>
				<button
					onClick={async () => {
						await signIn('github');
						router.push('/');
					}}
				>
					login with github
				</button>
			</div>
			<div>
				<button
					onClick={async () => {
						await signIn('google');
					}}
				>
					login with google
				</button>

				<div>
					<button
						onClick={() => {
							signOut();
						}}
					>
						logout
					</button>
				</div>
			</div>

			<input type='text' placeholder='email' />
			<input type='password' placeholder='password' />
			<button
				onClick={async () => {
					const res = await signIn('credentials', {
						username: 'ADITYA',
						password: '123',
						redirect: false,
					});
					router.push('/');
					console.log(res);
				}}
			>
				login with email
			</button>
		</div>
	);
};

export default Page;
