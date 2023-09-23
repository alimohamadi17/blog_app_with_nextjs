import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prismaDB";

export const authOptions = {
  // adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers

  providers: [
    // CredentialsProvider({
    //   // The name to display on the sign in form (e.g. "Sign in with...")
    //   name: "Credentials",
    //   // `credentials` is used to generate a form on the sign in page.
    //   // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   // You can pass any HTML attribute to the <input> tag through the object.
    //   credentials: {
    //     username: {
    //       label: "Username",
    //       type: "text",
    //       placeholder: "Type your username..",
    //     },
    //     password: {
    //       label: "Password",
    //       type: "password",
    //       placeholder: "Type your username..",
    //     },
    //   },
    //   async authorize(credentials, req) {
    //     // Add logic here to look up the user from the credentials supplied
    //     const user = {
    //       id: "123",
    //       name: "ali-mohamadi",
    //       password: "ali-mohamadi",
    //     };

    //     if (
    //       credentials?.username === user.name &&
    //       credentials?.password === user.password
    //     ) {
    //       return user;
    //     } else {
    //       return null;
    //     }

    //     // if (user) {
    //     //   // Any object returned will be saved in `user` property of the JWT
    //     //   return user;
    //     // } else {
    //     //   // If you return null then an error will be displayed advising the user to check their details.
    //     //   return null;

    //     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
    //     // }
    //   },
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // session: {
  //   strategy: "jwt",
  // },
  // secret: process.env.NEXTAUTH_SECRET,
  // debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
