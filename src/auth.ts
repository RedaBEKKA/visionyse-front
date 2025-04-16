import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User as AuthUser } from "@auth/core/types";
import { API_URL } from "./lib/utils/constants";

export type AdaptedUser = AuthUser & {
  id: string;
  email: string;
  fullName: string;
  pseudo: string;
  token: string;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await fetch(`${API_URL}/api/user/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const data = await response.json();

          if (response.ok && data.token) {
            return {
              id: data.user._id,
              email: data.user.email,
              fullName: data.user.fullName,
              pseudo: data.user.pseudo,
              token: data.token,
              name: data.user.fullName,
            } as AdaptedUser;
          }
          return null;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as AdaptedUser).id;
        token.email = (user as AdaptedUser).email;
        token.fullName = (user as AdaptedUser).fullName;
        token.pseudo = (user as AdaptedUser).pseudo;
        token.accessToken = (user as AdaptedUser).token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.fullName as string;
        session.user.fullName = token.fullName as string;
        session.user.pseudo = token.pseudo as string;
        session.user.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
});
