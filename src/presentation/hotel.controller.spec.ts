import { Test, TestingModule } from '@nestjs/testing';
import { HotelController } from './hotel.controller';
import { createMock } from '@golevelup/ts-jest';
import { HotelService } from '../application/services/hotel.service';

describe('HotelController', () => {
  let hotelController: HotelController;
  let hotelService: HotelService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HotelController],
    })
      .useMocker(createMock)
      .compile();

    hotelController = app.get(HotelController);
    hotelService = app.get(HotelService);
  });

  describe('getAll', () => {
    it('Should return all hotels', async () => {
      hotelService.findAll = jest.fn().mockResolvedValue([]);
      const result = await hotelController.getHotels();
      expect(result).toEqual([]);
    });
  });
});
