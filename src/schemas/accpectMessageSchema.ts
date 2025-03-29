import {z} from "zod"   //used to do the Schema validation

export const acceptMessageSchema = z.object({
    acceptMessages : z.boolean()
})