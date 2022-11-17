import {NextAuthOptions, User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import AppleProvider from "next-auth/providers/apple";
import {postLogin} from "@/lib/api";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        // @ts-ignore
        CredentialsProvider({
            // @ts-ignore
            async authorize({email, password}) {
                const user: User = await postLogin(email, password);
                return user;
            },
        }),
        AppleProvider({
            clientId: process.env.APPLE_ID!!,
            clientSecret: process.env.APPLE_SECRET!!,
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log(account?.provider)
            return account?.provider !== 'apple';
        }
    }
}
