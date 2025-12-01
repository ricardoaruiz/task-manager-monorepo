import z4 from "zod/v4";
import { LoginRouteBodySchema, MeResponseSuccessSchema, SignupBodySchema, SignupResponseSuccessSchema } from "./schemas.js";

// Signin
export type LoginRouteBodyType = z4.infer<typeof LoginRouteBodySchema>;

// Signup
export type SignupBodyType = z4.infer<typeof SignupBodySchema>;
export type SignupResponseSuccessType = z4.infer<typeof SignupResponseSuccessSchema>;

// Me
export type MeResponseSuccessType = z4.infer<typeof MeResponseSuccessSchema>;