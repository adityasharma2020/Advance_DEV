import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const client = new PrismaClient();

export async function GET() {
	//database logic
	const user = await client.user.findFirst();

	return Response.json({ name: user?.username, email: user?.username });
}

export async function POST(req: NextRequest) {
	//extract the body
	const body = await req.json();

	await client.user.create({
		data: {
			username: body.username,
			password: body.password,
		},
	});

	return NextResponse.json({
		message: 'you are logged in.',
	});
}
