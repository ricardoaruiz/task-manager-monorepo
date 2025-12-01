import z4 from "zod/v4";
import { ArchiveTaskParamsSchema, ArchiveTaskResponseSuccessSchema, CommonUnauthorizedResponseSchema, CommonVoidResponseSchema, CompleteTaskParamsSchema, CompleteTaskResponseSuccessSchema, CreateTaskBodySchema, CreateTaskResponseSuccessSchema, DeleteTaskParamsSchema, DeleteTaskRsponseSuccessSchema, ListTaskQueryStringSchema, ListTaskRouteResponseSuccessSchema, LoginRouteBodySchema, MeResponseSuccessSchema, SignupBodySchema, SignupResponseSuccessSchema } from "./schemas.js";

// Commons
export type CommonVoidResponseType = z4.infer<typeof CommonVoidResponseSchema>;
export type CommonUnauthorizedResponseType = z4.infer<typeof CommonUnauthorizedResponseSchema>;

// Signin
export type LoginRouteBodyType = z4.infer<typeof LoginRouteBodySchema>;

// Signup
export type SignupBodyType = z4.infer<typeof SignupBodySchema>;
export type SignupResponseSuccessType = z4.infer<typeof SignupResponseSuccessSchema>;

// Me
export type MeResponseSuccessType = z4.infer<typeof MeResponseSuccessSchema>;

// Tasks
// Archive Task
export type ArchiveTaskParamsType = z4.infer<typeof ArchiveTaskParamsSchema>;
export type ArchiveTaskResponseSuccessType = z4.infer<typeof ArchiveTaskResponseSuccessSchema>;

// Complete Task
export type CompleteTaskParamsType = z4.infer<typeof CompleteTaskParamsSchema>;
export type CompleteTaskResponseSuccessType = z4.infer<typeof CompleteTaskResponseSuccessSchema>;

// Create Task
export type CreateTaskBodyType = z4.infer<typeof CreateTaskBodySchema>;
export type CreateTaskResponseSuccessType = z4.infer<typeof CreateTaskResponseSuccessSchema>;

// Delete Task
export type DeleteTaskParamsType = z4.infer<typeof DeleteTaskParamsSchema>;
export type DeleteTaskRsponseSuccessType = z4.infer<typeof DeleteTaskRsponseSuccessSchema>;

// List Tasks
export type ListTaskQueryStringType = z4.infer<typeof ListTaskQueryStringSchema>;
export type ListTaskRouteResponseSuccessType = z4.infer<typeof ListTaskRouteResponseSuccessSchema>;