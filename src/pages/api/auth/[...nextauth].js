import { checkByEmail, checkByPassword } from "@/services/helperFunc";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session:{
        jwt:true
    },
  providers: [
    CredentialsProvider({
        async authorize({email,password}) {
          const validemail= checkByEmail(email)
          if(!validemail){
throw new Error ("user not exist")
          }
        const validPassword= await checkByPassword(validemail.password,password)
        if(!validPassword){
throw new Error("Wrong Passwor")
        }
        return{email}

          }
    }),
  ],
}

export default NextAuth(authOptions)