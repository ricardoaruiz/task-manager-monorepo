import { FastifyInstance } from 'fastify';
import { healthRoutes } from './health';
import { authRoutes } from './auth';
import { profileRoutes } from './profile';
import { tasksRoutes } from './tasks';

export default async function(fastify: FastifyInstance) {
  fastify.register(healthRoutes, { prefix: '/health' })
  fastify.register(authRoutes, { prefix: '/auth' })
  fastify.register(profileRoutes, { prefix: '/profile' })
  fastify.register(tasksRoutes, { prefix: '/tasks' })
}
