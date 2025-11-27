import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

export const listTasksRoute: FastifyPluginAsyncZod = async (app) => {
  app.get('/', {
    schema: {
      summary: 'List all tasks',
      description: 'Retrieve a list of all tasks',
      tags: ['Tasks'],
    }
  }, async (request, reply) => {
    return reply.status(200).send({ tasks: [] });
  })
}