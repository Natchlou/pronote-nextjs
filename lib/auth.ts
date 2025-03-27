import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { prisma } from "./db";
import { saltAndHashPassword } from "./password";

export const options: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        name: { label: "Name", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.name || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        // Check if the user already exists
        let user = await prisma.user.findFirst({
          where: {
            name: credentials.name,
          },
        });

        // If the user doesn't exist, create a new user
        if (!user) {
          const hashedPassword = await saltAndHashPassword(
            credentials.password,
          );

          user = await prisma.user.create({
            data: {
              name: credentials.name,
              password: hashedPassword, // Store hashed password
            },
          });
        }

        // Verify the password
        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password, // Compare against the stored hash
        );

        if (!isValidPassword) {
          throw new Error("Invalid credentials");
        }

        // Return the user object if valid
        return user;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma), // Note: If using JWT strategy, you may not need this adapter
  session: {
    strategy: "jwt", // Make sure you are using JWT for session
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token }) {
      // If using JWT, session is set from the token
      session.user = token.user as { name?: string | null | undefined; email?: string | null | undefined; image?: string | null | undefined; } | undefined; // Set the user information from the JWT token

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user; // Store user info in the token on sign-in
      }

      return token;
    },
  },
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      console.log("User signed in: %d", user);
      if (isNewUser) {
        console.log("New user detected: %d", user);
      }
    },
  },
};
