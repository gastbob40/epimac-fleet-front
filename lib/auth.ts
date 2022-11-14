import {NextAuthOptions, User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
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
    ],
}
