import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiaryController } from './beneficiary.controller';
import { BeneficiaryService } from './beneficiary.service';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';

const mockBeneficiaryService = {
  create: jest.fn((dto: CreateBeneficiaryDto) => ({
    id: Date.now(),
    ...dto,
  })),
  findAll: jest.fn(() => [
    {
      id: Date.now(),
      name: 'Test Beneficiary',
      age: 10,
      needs: 'Test Needs',
      schoolId: 1,
    },
  ]),
  findOne: jest.fn((id: number) => ({
    id,
    name: 'Test Beneficiary',
    age: 10,
    needs: 'Test Needs',
    schoolId: 1,
  })),
  update: jest.fn((id: number, dto: UpdateBeneficiaryDto) => ({
    id,
    ...dto,
  })),
  remove: jest.fn((id: number) => ({ id })),
};

describe('BeneficiaryController', () => {
  let controller: BeneficiaryController;
  let service: BeneficiaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeneficiaryController],
      providers: [
        {
          provide: BeneficiaryService,
          useValue: mockBeneficiaryService,
        },
      ],
    }).compile();

    controller = module.get<BeneficiaryController>(BeneficiaryController);
    service = module.get<BeneficiaryService>(BeneficiaryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a beneficiary', async () => {
      const dto: CreateBeneficiaryDto = {
        name: 'Test Beneficiary',
        age: 10,
        needs: 'Test Needs',
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
    it('should return an array of beneficiaries', async () => {
      expect(await controller.findAll()).toEqual([
        {
          id: expect.any(Number),
          name: 'Test Beneficiary',
          age: 10,
          needs: 'Test Needs',
          schoolId: 1,
        },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single beneficiary', async () => {
      const id = 1;
      expect(await controller.findOne(`${id}`)).toEqual({
        id,
        name: 'Test Beneficiary',
        age: 10,
        needs: 'Test Needs',
        schoolId: 1,
      });
      expect(service.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('update', () => {
    it('should update a beneficiary', async () => {
      const id = 1;
      const dto: UpdateBeneficiaryDto = {
        name: 'Updated Beneficiary',
        age: 12,
        needs: 'Updated Needs',
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
    it('should remove a beneficiary', async () => {
      const id = 1;
      expect(await controller.remove(`${id}`)).toEqual({ id });
      expect(service.remove).toHaveBeenCalledWith(id);
    });
  });
});
