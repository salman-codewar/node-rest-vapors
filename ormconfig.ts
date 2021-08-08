import env from './src/config/env';
import { config } from 'dotenv';
config();

export default env.NODE_ENV === 'production' || env.NODE_ENV === 'staging'
  ? {
      name: 'default',
      type: 'postgres',
      url: env.DATABASE_URL,
      synchronize: false,
      entities: ['src/db/entities/**/*.ts'],
      migrationsTableName: 'migration',
      migrations: ['src/db/migration/*.*'],
      cli: {
        entitiesDir: './src/db/entities',
        migrationsDir: './src/db/migration'
      },
      ssl: {
        rejectUnauthorized: false
      }
    }
  : {
      name: 'default',
      type: 'postgres',
      url: env.DATABASE_URL,
      synchronize: false,
      entities: ['src/db/entities/**/*.ts'],
      migrationsTableName: 'migrations',
      migrations: ['src/db/migration/*.*'],
      cli: {
        entitiesDir: './src/db/entites',
        migrationsDir: './src/db/migration'
      }
    };
