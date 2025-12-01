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

// Create Task
export const CreateTaskBodySchema = z4.object({
  title: z4.string().min(1, 'Title is required').describe('Title of the task'),
  description: z4
    .string()
    .min(1, 'Description is required')
    .describe('Description of the task'),
})

export const CreateTaskResponseSuccessSchema = z4.object({
  id: z4.string().describe('Unique identifier for the task'),
  title: z4.string().min(1, 'Title is required').describe('Title of the task'),
  description: z4
    .string()
    .min(1, 'Description is required')
    .describe('Description of the task'),
  completed_at: z4.coerce
    .date()
    .nullable()
    .describe('The completion date of the task, or null if not completed'),
})

// Delete Task
export const DeleteTaskParamsSchema = z4.object({
  id: z4.uuidv7().describe('The unique identifier of the task to be deleted'),
})

export const DeleteTaskRsponseSuccessSchema = z4.object({
  id: z4.string().describe('The unique identifier of the deleted task'),
  title: z4
    .string()
    .min(1, 'Title is required')
    .describe('The title of the deleted task'),
  description: z4
    .string()
    .min(1, 'Description is required')
    .describe('The description of the deleted task'),
  completed_at: z4.coerce
    .date()
    .nullable()
    .describe(
      'The completion date of the deleted task, or null if not completed',
    ),
})

// List Tasks
export const ListTaskQueryStringSchema = z4.object({
  title: z4.string().optional().describe('Filter by task title'),
  description: z4.string().optional().describe('Filter by task description'),
  status: z4
    .enum(['completed', 'pending'])
    .optional()
    .describe('Filter by task status'),
  isArchived: z4
    .enum(['true', 'false'])
    .optional()
    .default('false')
    .describe('Filter by archived tasks'),
  page: z4.coerce.number().optional().describe('Page number for pagination'),
  itemsPerPage: z4.coerce
    .number()
    .optional()
    .describe('Number of items per page for pagination'),
})

export const ListTaskRouteResponseSuccessSchema = z4.object({
  tasks: z4.array(
    z4.object({
      id: z4.string().describe('The unique identifier of the task'),
      title: z4.string().describe('The title of the task'),
      description: z4.string().describe('The description of the task'),
      completed_at: z4.coerce
        .date()
        .nullable()
        .describe('The completion date of the task, or null if not completed'),
      archived_at: z4.coerce
        .date()
        .nullable()
        .describe('The archival date of the task, or null if not archived'),
    }),
  ),
})

// Load Task
export const LoadTaskParamsSchema = z4.object({
  id: z4.uuidv7().describe('The unique identifier of the task to be loaded'),
})

export const LoadTaskRsponseSuccessSchema = z4.object({
  id: z4.string().describe('The unique identifier of the task'),
  title: z4
    .string()
    .min(1, 'Title is required')
    .describe('The title of the task'),
  description: z4
    .string()
    .min(1, 'Description is required')
    .describe('The description of the task'),
  completed_at: z4.coerce
    .date()
    .nullable()
    .describe('The completion date of the task, or null if not completed'),
})

export const LoadTaskResponseNotFoundSchema = z4.void()

// Uncomplete Task
export const UnCompleteTaskParamsSchema = z4.object({
  id: z4
    .uuidv7()
    .describe('The unique identifier of the task to be uncompleted'),
})

export const UnCompleteTaskResponseSuccessSchema = z4.void()

// Update Task
export const UpdateTaskParamsSchema = z4.object({
  id: z4.uuidv7().describe('The unique identifier of the task to be updated'),
})

export const UpdateTaskBodySchema = z4.object({
  title: z4
    .string()
    .min(1, 'Title must have at least one character')
    .optional()
    .describe('The new title of the task'),
  description: z4
    .string()
    .min(1, 'Description must have at least one character')
    .optional()
    .describe('The new description of the task'),
})

export const UpdateTaskResponseSuccessSchema = z4.void()