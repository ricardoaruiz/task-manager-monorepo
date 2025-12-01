import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { StatusCodes } from 'http-status-codes'
import { HealtCheckResponseSuccess } from '@task-manager/contracts'

/**
 * Health check route
 * @route GET /health/check
 * @summary Health check
 * @description Endpoint to check if the server is running
 * @tags Health
 * @response 200 - Server is running
 */
export const checkRoute: FastifyPluginAsyncZod = async (app, _options) => {
  app.get(
    '/check',
    {
      schema: {
        summary: 'Health check',
        description: 'Endpoint to check if the server is running',
        tags: ['Health'],
        response: {
          [StatusCodes.OK]: HealtCheckResponseSuccess,
        },
      },
    },
    async (_request, reply) => {
      return reply.status(StatusCodes.OK).send({ status: 'ok' })
    },
  )
}
