import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {NextApiRequest, NextApiResponse} from "next";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            // @ts-ignore
            async authorize(credentials) {
                const user = {id: 1, name: 'Jenny'}
                return user;
            },
        }),
    ],
}

export default NextAuth(authOptions)
