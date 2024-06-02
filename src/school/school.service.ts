import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { School, Prisma } from '@prisma/client';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}

  async createSchool(data: Prisma.SchoolCreateInput): Promise<School> {
    return this.prisma.school.create({ data });
  }

  async getSchools(): Promise<School[]> {
    return this.prisma.school.findMany();
  }

  async getSchoolById(id: number): Promise<School> {
    return this.prisma.school.findUnique({ where: { id } });
  }

  async updateSchool(
    id: number,
    data: Prisma.SchoolUpdateInput,
  ): Promise<School> {
    return this.prisma.school.update({
      where: { id },
      data,
    });
  }

  async deleteSchool(id: number): Promise<School> {
    return this.prisma.school.delete({ where: { id } });
  }
}
