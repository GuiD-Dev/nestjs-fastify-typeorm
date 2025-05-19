import { Controller, Get } from '@nestjs/common';
import { RouteConfig } from '@nestjs/platform-fastify';
import { HotelService } from '../application/services/hotel.service';

@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @RouteConfig({})
  @Get('get-all')
  public getHotels() {
    return this.hotelService.findAll();
  }
}
