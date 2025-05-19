import { DataSource } from "typeorm";

export const databaseConfig = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'pass',
  database: 'database',
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  synchronize: true,
});