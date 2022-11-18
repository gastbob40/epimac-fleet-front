import {NextAuthOptions, User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import AppleProvider from "next-auth/providers/apple";
import {getAccountFromEmail, postLogin} from "@/lib/api";
import Auth0 from "next-auth/providers/auth0";

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
        }),
        Auth0({
            name: 'CRI',
            id: 'cri',
            clientId: process.env.CRI_ACCESS_KEY!!,
            clientSecret: process.env.CRI_SECRET_KEY!!,
            issuer: process.env.CRI_SERVER_URL!!,
        })
    ],
    callbacks: {
        async signIn({user, account, profile, email, credentials}) {
            if (account?.provider === 'credentials') {
                return true;
            }

            const jwt = await getAccountFromEmail(user.email ?? "");

            if (jwt === null) {
                return '/register?error=account-not-linked';
            }

            return true;
        },

        async jwt({token, user, account, profile, isNewUser}) {
            const email = user?.email ?? "";
            console.log(email);
            const data = await getAccountFromEmail(email);
            return {...token, ...data};
        },

        async session({session, token}) {
            if (token && session && session.user) {
                session.user.email = token.email;
                session.user.username = token.username;
                session.user.is_superuser = token.is_superuser;
            }

            return session;
        }
    }
}
