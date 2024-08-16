import { sql } from '@vercel/postgres';
import { compare } from 'bcrypt';
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    session:{
        strategy:"jwt"
      },
    providers:[CredentialsProvider({

        credentials:{
            name:{},
            email:{},
            password:{}
        },
        async authorize(credentials,req){
            const response = await sql`
            SELECT*FROM users WHERE email = ${credentials?.email}
            `
            const user = response.rows[0]
            const passwordCorect = await compare(credentials?.password || "", user.password)
            console.log({passwordCorect})
            if(passwordCorect){
                    return{
                        
                        id:user.id,
                        name:user.name,
                        email:user.email
                    }
            }

            return null
        }

    })]
})

export {handler as GET , handler as POST}