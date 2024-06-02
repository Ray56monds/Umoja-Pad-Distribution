import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDistributionEventDto } from './dto/create-distributionevent.dto';
import { UpdateDistributionEventDto } from './dto/update-distributionevent.dto';
import { DistributionEvent } from '@prisma/client';

@Injectable()
export class DistributionEventService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createDistributionEventDto: CreateDistributionEventDto,
  ): Promise<DistributionEvent> {
    const { date, location, ngoId, schoolId } = createDistributionEventDto;
    return this.prisma.distributionEvent.create({
      data: {
        date: new Date(date),
        location,
        ngo: {
          connect: { id: ngoId },
        },
        school: {
          connect: { id: schoolId },
        },
      },
    });
  }

  async findAll(): Promise<DistributionEvent[]> {
    return this.prisma.distributionEvent.findMany();
  }

  async findOne(id: number): Promise<DistributionEvent> {
    const event = await this.prisma.distributionEvent.findUnique({
      where: { id },
    });
    if (!event) {
      throw new NotFoundException(`DistributionEvent with ID ${id} not found`);
    }
    return event;
  }

  async update(
    id: number,
    updateDistributionEventDto: UpdateDistributionEventDto,
  ): Promise<DistributionEvent> {
    return this.prisma.distributionEvent.update({
      where: { id },
      data: updateDistributionEventDto,
    });
  }

  async remove(id: number): Promise<DistributionEvent> {
    return this.prisma.distributionEvent.delete({
      where: { id },
    });
  }
}
