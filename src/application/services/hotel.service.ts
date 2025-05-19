import { Injectable, Inject } from '@nestjs/common';
import { HOTEL_REPOSITORY_KEY } from '../../constants';
import { Hotel } from '../../infra/entities/hotel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HotelService {
  public constructor(
    @Inject(HOTEL_REPOSITORY_KEY)
    private readonly hotelRepository: Repository<Hotel>,
  ) {}

  public async findAll(): Promise<Hotel[]> {
    return this.hotelRepository.find();
  }
}
