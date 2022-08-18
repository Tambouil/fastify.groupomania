import fastify from "./app";
import authRoutes from "./modules/auth/auth.routes";
import { userSchemas } from "./modules/auth/auth.schema";
import userRoutes from "./modules/user/user.routes";
import { config } from "./utils/config";

/**
 * Run the server!
 */
const start = async () => {
  for (const schema of [...userSchemas]) {
    fastify.addSchema(schema);
  }

  fastify.register(authRoutes, { prefix: "/api/auth" });
  fastify.register(userRoutes, { prefix: "/api/users" });
  try {
    await fastify.listen({ port: config.PORT, host: config.HOST });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
