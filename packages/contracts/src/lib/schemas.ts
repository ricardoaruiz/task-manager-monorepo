import z4 from "zod/v4"

export const CreateTaskBodySchema = z4.object({
  title: z4.string().min(1, 'Title is required').describe('Title of the task'),
  description: z4.string().min(1, 'Description is required').describe('Description of the task'),
})

export const CreateTaskResponseSuccessSchema = z4.object({
  id: z4.uuid().describe('Unique identifier for the task'),
})

export const EmptyResponseSchema = z4.void()