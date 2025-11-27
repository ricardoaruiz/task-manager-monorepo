import * as path from 'path';
import cookie from '@fastify/cookie'
import cors from '@fastify/cors'
import { FastifyInstance } from 'fastify';
import fastifySwagger from '@fastify/swagger'
import scalarApiReference from '@scalar/fastify-api-reference'
import AutoLoad from '@fastify/autoload';
import { serializerCompiler, validatorCompiler, jsonSchemaTransform, type ZodTypeProvider } from 'fastify-type-provider-zod';
import envVariables from './env';

/* eslint-disable-next-line */
export interface AppOptions { }

export async function app(fastify: FastifyInstance, opts: AppOptions) {
  // Place here your custom code!
  fastify.withTypeProvider<ZodTypeProvider>()
  fastify.setValidatorCompiler(validatorCompiler);
  fastify.setSerializerCompiler(serializerCompiler);

  fastify.register(cookie)

  // CORS
  fastify.register(cors, {
    origin: envVariables.ALLOWED_ORIGINS,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  })

  // Swagger API Documentation
  fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Task Manager API',
        description: 'API documentation for the Task Manager service',
        version: '1.0.0',
      },
    },
    transform: jsonSchemaTransform,
  })

  // Scalar API Reference Documentation API
  fastify.register(scalarApiReference, {
    routePrefix: '/docs',
  })

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: { ...opts },
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: { ...opts },
  });
}
