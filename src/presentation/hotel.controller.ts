import { Controller, Get } from '@nestjs/common';
import { RouteConfig } from '@nestjs/platform-fastify';
import { HotelService } from '../application/services/hotel.service';

@Controller('hotel')
export class HotelController {
  public constructor(private readonly hotelService: HotelService) { }

  @RouteConfig({})
  @Get()
  public getHotels() {
    return this.hotelService.findAll();
  }
}
