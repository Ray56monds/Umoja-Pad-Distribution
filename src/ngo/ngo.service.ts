import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNgoDto } from './dto/create-ngo.dto';
import { UpdateNgoDto } from './dto/update-ngo.dto';
import { NGO } from '@prisma/client';

@Injectable()
export class NgoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createNgoDto: CreateNgoDto): Promise<NGO> {
    return this.prisma.nGO.create({
      data: createNgoDto,
    });
  }

  async findAll(): Promise<NGO[]> {
    return this.prisma.nGO.findMany();
  }

  async findOne(id: number): Promise<NGO> {
    const ngo = await this.prisma.nGO.findUnique({
      where: { id },
    });
    if (!ngo) {
      throw new NotFoundException(`NGO with ID ${id} not found`);
    }
    return ngo;
  }

  async update(id: number, updateNgoDto: UpdateNgoDto): Promise<NGO> {
    return this.prisma.nGO.update({
      where: { id },
      data: updateNgoDto,
    });
  }

  async remove(id: number): Promise<NGO> {
    return this.prisma.nGO.delete({
      where: { id },
    });
  }
}
