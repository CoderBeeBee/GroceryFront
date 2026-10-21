import z from "zod";

export const navSearchSchema = z.object({
    query:z.string().trim()
})

export type navSearchTypes = z.infer<typeof navSearchSchema>