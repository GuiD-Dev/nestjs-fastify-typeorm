import { Module } from '@nestjs/common';
import { HotelService } from './services/hotel.service';
import { InfraModule } from 'src/infra/infra.module';
import { DATABASE_CONFIG_KEY, HOTEL_REPOSITORY_KEY } from 'src/constants';
import { DataSource } from 'typeorm';
import { Hotel } from 'src/infra/entities/hotel.entity';

@Module({
  imports: [InfraModule],
  providers: [
    HotelService,
    {
      provide: HOTEL_REPOSITORY_KEY,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Hotel),
      inject: [DATABASE_CONFIG_KEY],
    },
  ],
  exports: [HotelService],
})
export class ApplicationModule { }
