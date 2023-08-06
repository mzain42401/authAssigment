import Form from "@/components/auth/form";

export default function SignUp () {
    const onsubmit= async(email,password)=>{
     const response= await fetch('/api/auth/hello',{
        method:"POST",
        body:JSON.stringify({email,password}),
        headers:{
            "Content-Type":"application/json"
        }
     })
     if(response.ok){
        alert("signuUp success fully")
       
     }
    }
    return <Form signin={false} onSubmission={onsubmit}/> 
 
};
