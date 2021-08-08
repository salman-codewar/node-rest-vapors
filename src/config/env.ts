import { cleanEnv, str, num } from 'envalid';
import { config } from 'dotenv';
config();

const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ['development', 'production', 'staging'],
    desc: `Node environement - choices are ['development', 'production', 'staging']`
  }),
  PORT: num({
    default: 5000,
    desc: 'Port of the express server',
    example: '5000'
  }),
  DATABASE_URL: str({
    desc: 'Database url',
    example: process.env.DB_URL
  })
});
export default env;
