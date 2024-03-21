// import GitHubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { NextAuthOptions } from "next-auth";
// //import { PrismaAdapter } from "@next-auth/prisma-adapter";
// //import { db } from "./db";
// const otpion: NextAuthOptions = {
// 	pages: {
// 		signIn: "/signin",
// 	},
// 	// adapter: PrismaAdapter(db),
// 	session: {
// 		strategy: "jwt",
// 	},
// 	providers: [
// 		GitHubProvider({
// 			clientId: String(process.env.GITHUB_ID!),
// 			clientSecret: String(process.env.GITHUB_SECRET!),
// 		}),
// 		CredentialsProvider({
// 			name: "Credentials",

// 			credentials: {
// 				username: {
// 					label: "Email",
// 					type: "email",
// 					placeholder: "email",
// 				},
// 				password: {
// 					label: "Password",
// 					type: "password",
// 					placeholder: "Password",
// 				},
// 			},
// 			async authorize(credentials) {
// 				const res = await fetch("/api/user/get", {
// 					method: "POST",
// 					body: JSON.stringify(credentials),
// 					headers: { "Content-Type": "application/json" },
// 				});
// 				const user = await res.json();
// 				console.log(user);

// 				// If no error and we have user data, return it
// 				if (res.ok && user) {
// 					return user;
// 				}
// 				// Return null if user data could not be retrieved
// 				return null;
// 			},
// 		}),
// 	],
// 	secret: process.env.NEXTAUTH_SECRET!,
// };

// export default otpion;
