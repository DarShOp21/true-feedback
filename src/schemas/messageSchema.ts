import {z} from "zod"   //used to do the Schema validation


export const messageSchema = z.object({
    content : z 
        .string()
        .min(10 , {"message" : "Content must be at least of 10 characters"})
        .max(400 , {"message" : "Content must be atmost of 400 characters"})
})