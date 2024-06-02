import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';
import { Beneficiary } from '@prisma/client';

@Injectable()
export class BeneficiaryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createBeneficiaryDto: CreateBeneficiaryDto,
  ): Promise<Beneficiary> {
    const { name, age, needs, schoolId } = createBeneficiaryDto;
    return this.prisma.beneficiary.create({
      data: {
        name,
        age,
        needs,
        school: {
          connect: { id: schoolId },
        },
      },
    });
  }

  async findAll(): Promise<Beneficiary[]> {
    return this.prisma.beneficiary.findMany();
  }

  async findOne(id: number): Promise<Beneficiary> {
    const beneficiary = await this.prisma.beneficiary.findUnique({
      where: { id },
    });
    if (!beneficiary) {
      throw new NotFoundException(`Beneficiary with ID ${id} not found`);
    }
    return beneficiary;
  }

  async update(
    id: number,
    updateBeneficiaryDto: UpdateBeneficiaryDto,
  ): Promise<Beneficiary> {
    return this.prisma.beneficiary.update({
      where: { id },
      data: updateBeneficiaryDto,
    });
  }

  async remove(id: number): Promise<Beneficiary> {
    return this.prisma.beneficiary.delete({
      where: { id },
    });
  }
}
