import { Module } from '@nestjs/common';
import { HotelController } from './presentation/hotel.controller';
import { InfraModule } from './infra/infra.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [ApplicationModule, InfraModule],
  controllers: [HotelController],
})
export class AppModule { }
