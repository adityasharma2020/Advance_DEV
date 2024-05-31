import axios from 'axios';
import client from '@/db';

async function getUserData() {
	const user = await client.user.findFirst();
	return {
		username: user?.username,
		name: 'aditya',
	};
}

//async component
export default async function Home() {
	const data = await getUserData();
	return (
		<div>
			{data.name}
			{data.username}
		</div>
	);
}
