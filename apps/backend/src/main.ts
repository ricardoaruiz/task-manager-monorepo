import Fastify from 'fastify';
import { app } from './app/app';
import env from './app/env'

// Instantiate Fastify with some config
const server = Fastify({
  logger: true,
})

// Register your application as a normal plugin.
server.register(app);

// Start listening.
server.listen({ port: env.PORT, host: '0.0.0.0' }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  } else {
    console.log(`🔥 HTTP server running on http://localhost:${env.PORT}`);
    console.log(`📖 API documentation available at http://localhost:${env.PORT}/docs`);
  }
});
