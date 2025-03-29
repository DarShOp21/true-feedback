import {z} from "zod"   //used to do the Schema validation

export const signInSchema = z.object({
    identifier : z.string(),     //used as identifier because it can be used as both email as well as username
    password : z.string().min(6)
})