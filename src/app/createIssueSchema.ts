import { z } from "zod";

export const createIssueSchema = z.object({
    title: z.string().min(1, "title is required").max(255),
    description: z.string({
        error: "description is required"
    }).min(1, "description is required") // If the value is an empty string ("")
});
