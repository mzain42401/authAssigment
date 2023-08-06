

import signUp from "@/services/helperFunc"


export default   (req,res)=>{
    if(req.method==="POST"){
        const {email,password}=req.body
    signUp(email,password)
    res.status(201).send()
    }
    

}