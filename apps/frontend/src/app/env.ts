import * as z from 'zod/v4'

const ENVIRONMENT_VARIABLES_SCHEMA = z.object({
  VITE_API_URL: z.url().default('http://localhost:3333'),
})

const env = ENVIRONMENT_VARIABLES_SCHEMA.parse(import.meta.env)

export { env }
