import Form from "@/components/auth/form";
import {signIn} from 'next-auth/react'
export default function SignIn () {
   const onsubmit=async(email,password)=>{
   await signIn('credentials',{
        redirect:false,
        email,password
        
    })
   }
    return <Form signin={true} onSubmission={onsubmit} /> 
};
