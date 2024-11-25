import {z} from "zod"


export const messageSchema = z.object({
   content: z.string()
   .min(10, "Content must be 10 characters")
.max(200,{message: "Content must be no longer than 300 characters"})
})