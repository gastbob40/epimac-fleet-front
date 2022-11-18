import { User } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
    interface JWT {
        id: number,
        email: string,
        username: string
        is_superuser: boolean
    }
}

declare module "next-auth" {
    interface Session {
        user: User & {
            id: number,
            email: string,
            username: string
            is_superuser: boolean
        }
    }
}
