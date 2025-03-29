import {z} from "zod" //used to do the Schema validation

export const verifySchema = z.object({
    code : z.string().length(6 , {"message" : "Verifiaction code must be of 6 digits"}),
})