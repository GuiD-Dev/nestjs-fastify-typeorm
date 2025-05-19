import { Module } from '@nestjs/common';
import { databaseConfig } from './database-config';
import { DATABASE_CONFIG_KEY, HOTEL_REPOSITORY_KEY } from 'src/constants';

@Module({
  providers: [
    { provide: DATABASE_CONFIG_KEY, useFactory: async () => (databaseConfig.initialize()) },
  ],
  exports: [
    { provide: DATABASE_CONFIG_KEY, useFactory: async () => (databaseConfig.initialize()) },
  ],
})
export class InfraModule { }
