import { FastifyInstance } from 'fastify';
import { tasksRoutes } from './tasks';

export default async function(fastify: FastifyInstance) {
  fastify.get('/', async function() {
    return { message: 'Hello API' };
  });

  fastify.register(tasksRoutes, { prefix: '/tasks' });
}
