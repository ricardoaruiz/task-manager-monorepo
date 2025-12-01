import z4 from "zod/v4";
import { LoginRouteBodySchema, SignupBodySchema, SignupResponseSuccessSchema } from "./schemas.js";

// Health Check
export const HealtCheckResponseSuccess = z4.object({
  status: z4.string(),
})

// Signin
export type LoginRouteBodyType = z4.infer<typeof LoginRouteBodySchema>;

// Signup
export type SignupBodyType = z4.infer<typeof SignupBodySchema>;
export type SignupResponseSuccessType = z4.infer<typeof SignupResponseSuccessSchema>;