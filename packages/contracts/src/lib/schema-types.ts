import z4 from "zod/v4";
import { LoginRouteBodySchema } from "./schemas.js";

export type LoginRouteBodyType = z4.infer<typeof LoginRouteBodySchema>;