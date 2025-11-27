import { FastifyInstance } from "fastify";
import { listTasksRoute } from "./list";
import { createTaskRoute } from "./create";

export function tasksRoutes(app: FastifyInstance) {
  app.register(listTasksRoute)
  app.register(createTaskRoute)
}