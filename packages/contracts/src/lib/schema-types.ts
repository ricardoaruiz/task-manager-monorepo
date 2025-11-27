import z4 from "zod/v4";
import { CreateTaskBodySchema, CreateTaskResponseSuccessSchema, EmptyResponseSchema } from "./schemas.js";

export type CreateTaskBody = z4.infer<typeof CreateTaskBodySchema>;
export type CreateTaskResponseSuccess = z4.infer<typeof CreateTaskResponseSuccessSchema>;

export type EmptyResponse = z4.infer<typeof EmptyResponseSchema>;