import { TypeOrmModuleOptions } from '@nestjs/typeorm';

console.log('hohoho', process.env.DATABASE_HOST);
export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'elehdrn1',
  database: 'CategoryPrj',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
