import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { CreateTaskBodySchema, CreateTaskResponseSuccessSchema } from '@task-manager/contracts'

export const createTaskRoute: FastifyPluginAsyncZod = async (app) => {
  app.post('/', {
    schema: {
      summary: 'Create a new task',
      description: 'Create a new task with the provided details',
      tags: ['Tasks'],
      body: CreateTaskBodySchema,
      response: {
        201: CreateTaskResponseSuccessSchema
      }
    }
  }, async (request, reply) => {
    const { title, description } = request.body;
    console.log("🚀 ~ createTaskRoute ~ title, description:", title, description)
    return reply.status(201).send({ id: '123e4567-e89b-12d3-a456-426614174000' });
  })
}