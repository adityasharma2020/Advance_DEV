import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

export const NEXT_AUTH = {
	providers: [
		CredentialsProvider({
			name: 'Email',
			credentials: {
				username: { label: 'emailLabel', type: 'text', placeholder: 'Email' },
				password: { label: 'password Label', type: 'password', placeholder: 'Password' },
			},
			async authorize(credentials: any) {
				console.log(credentials);
				//validation

				return {
					id: 'user1',
					name: 'aditya',
					email: 'harkirat',
				};
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID || '',
			clientSecret: process.env.GOOGLE_SECRET || '',
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID || '',
			clientSecret: process.env.GITHUB_SECRET || '',
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		jwt: ({ token, user }) => {
			token.userId = token.sub;
			console.log(token);
			return token;
		},
		session: ({ session, token, user }: any) => {
			if (session && session.user) {
				session.user.id = token.userId;
			}
			return session;
		},
	},
	
};
