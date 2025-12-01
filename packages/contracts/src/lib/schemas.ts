import z4 from "zod/v4"

// Commons
export const CommonVoidResponseSchema = z4.void()
export const CommonUnauthorizedResponseSchema = z4.void()

// Health Check
export const HealtCheckResponseSuccess = z4.object({
  status: z4.string(),
})

// Signin
export const LoginRouteBodySchema = z4.object({
  email: z4
    .email()
    .min(1, 'Email is required')
    .describe('The email of the user'),
  password: z4
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .describe('The password of the user'),
})

export const LoginRouteResponseSuccessSchema = z4.void()
export const LoginRouteResponseUnauthorizedSchema = z4.void()

// Signup
export const SignupBodySchema = z4
  .object({
    name: z4
      .string()
      .min(1, 'Name is required')
      .describe('The full name of the user'),
    email: z4
      .email('Invalid email address')
      .describe('The email address of the user'),
    password: z4
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .describe('The password for the user account'),
    passwordConfirmation: z4
      .string()
      .min(6, 'Password confirmation must be at least 6 characters long')
      .describe('The password confirmation for the user account'),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  })

export const SignupResponseSuccessSchema = z4.object({
  id: z4.string().describe('The unique identifier of the user'),
  name: z4.string().describe('The full name of the user'),
  email: z4.email().describe('The email address of the user'),
})

// Me
export const MeResponseSuccessSchema = z4.object({
  id: z4.string().describe('User unique identifier'),
  name: z4.string().describe('User full name'),
  email: z4.email().describe('User email address'),
})

// Tasks
// Archive Task
export const ArchiveTaskParamsSchema = z4.object({
  id: z4.uuidv7().describe('The unique identifier of the task to be archived'),
})

export const ArchiveTaskResponseSuccessSchema = z4.void()

// Complete Task
export const CompleteTaskParamsSchema = z4.object({
  id: z4.uuidv7().describe('The unique identifier of the task to be completed'),
})

export const CompleteTaskResponseSuccessSchema = z4.void()