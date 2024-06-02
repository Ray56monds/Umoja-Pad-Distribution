import { Test, TestingModule } from '@nestjs/testing';
import { DistributionEventController } from './distributionevent.controller';
import { DistributionEventService } from './distributionevent.service';
import { CreateDistributionEventDto } from './dto/create-distributionevent.dto';
import { UpdateDistributionEventDto } from './dto/update-distributionevent.dto';

const mockDistributionEventService = {
  create: jest.fn((dto: CreateDistributionEventDto) => ({
    id: Date.now(),
    ...dto,
  })),
  findAll: jest.fn(() => [
    {
      id: Date.now(),
      date: new Date(),
      location: 'Test Location',
      ngoId: 1,
      schoolId: 1,
    },
  ]),
  findOne: jest.fn((id: number) => ({
    id,
    date: new Date(),
    location: 'Test Location',
    ngoId: 1,
    schoolId: 1,
  })),
  update: jest.fn((id: number, dto: UpdateDistributionEventDto) => ({
    id,
    ...dto,
  })),
  remove: jest.fn((id: number) => ({ id })),
};

describe('DistributionEventController', () => {
  let controller: DistributionEventController;
  let service: DistributionEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistributionEventController],
      providers: [
        {
          provide: DistributionEventService,
          useValue: mockDistributionEventService,
        },
      ],
    }).compile();

    controller = module.get<DistributionEventController>(
      DistributionEventController,
    );
    service = module.get<DistributionEventService>(DistributionEventService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a distribution event', async () => {
      const dto: CreateDistributionEventDto = {
        date: '2023-05-01T00:00:00Z',
        location: 'Test Location',
        ngoId: 1,
        schoolId: 1,
      };
      expect(await controller.create(dto)).toEqual({
        id: expect.any(Number),
        ...dto,
      });
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('should return an array of distribution events', async () => {
      expect(await controller.findAll()).toEqual([
        {
          id: expect.any(Number),
          date: expect.any(Date),
          location: 'Test Location',
          ngoId: 1,
          schoolId: 1,
        },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single distribution event', async () => {
      const id = 1;
      expect(await controller.findOne(`${id}`)).toEqual({
        id,
        date: expect.any(Date),
        location: 'Test Location',
        ngoId: 1,
        schoolId: 1,
      });
      expect(service.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('update', () => {
    it('should update a distribution event', async () => {
      const id = 1;
      const dto: UpdateDistributionEventDto = {
        date: '2023-05-01T00:00:00Z',
        location: 'Updated Location',
        ngoId: 2,
        schoolId: 2,
      };
      expect(await controller.update(`${id}`, dto)).toEqual({
        id,
        ...dto,
      });
      expect(service.update).toHaveBeenCalledWith(id, dto);
    });
  });

  describe('remove', () => {
    it('should remove a distribution event', async () => {
      const id = 1;
      expect(await controller.remove(`${id}`)).toEqual({ id });
      expect(service.remove).toHaveBeenCalledWith(id);
    });
  });
});
