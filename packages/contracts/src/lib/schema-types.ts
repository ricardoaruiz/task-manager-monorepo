import z4 from "zod/v4";
import { CommonUnauthorizedResponseSchema, CommonVoidResponseSchema, LoginRouteBodySchema, MeResponseSuccessSchema, SignupBodySchema, SignupResponseSuccessSchema } from "./schemas.js";

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