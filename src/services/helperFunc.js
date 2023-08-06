import fs from 'fs'
import path from 'path'
import { compare, hash } from 'bcrypt'
const myPath = path.join(process.cwd(), "src", "data", "data.json")


export function readFulljson() {

    const data = fs.readFileSync(myPath)
    return JSON.parse(data)


}

export function checkByEmail(email) {

    const allData = readFulljson()

    return allData.find((elem) => {
        return elem.email === email
    })

}
export async function checkByPassword(hidePassword,password) {

   const isCorrect=await compare(password,hidePassword)
return isCorrect
}


export default async function signUp(email, password) {
    const isExist = checkByEmail(email)
    if (isExist === undefined) {
        const allData = readFulljson()
        const hidePassword=await hash(password,10)
        allData.push({
            email, password:hidePassword
        })
        fs.writeFileSync(myPath, JSON.stringify(allData))
    }
    else{
        console.log("user exist")
    }







}