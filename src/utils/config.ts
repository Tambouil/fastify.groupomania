import envSchema from "env-schema";
import { Env } from "./interfaces";

const schema = {
  type: "object",
  required: ["PORT", "HOST", "DATABASE_URL", "JWT_SECRET_KEY"],
  properties: {
    PORT: {
      type: "number",
      default: 3000,
    },
    HOST: {
      type: "string",
      default: "localhost",
    },
    DATABASE_URL: {
      type: "string",
    },
    JWT_SECRET_KEY: {
      type: "string",
      default: "mysecretpassword",
    },
  },
};

export const config = envSchema<Env>({
  schema: schema,
  dotenv: true,
});
