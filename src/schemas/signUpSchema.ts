import {z} from "zod" //used to do the Schema validation

export const usernameValidation = z
    .string()
    .min(5 , "Username must be atleast 5 characters")
    .max(20 , "Username must be atmost 20 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Username must not contain special characters ")

export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({"message" : "Invalid email address"}),
    password : z.string().min(6 , {"message" : "Password must be at least 6 characters"})
})