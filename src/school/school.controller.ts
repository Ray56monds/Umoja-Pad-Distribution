import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from '@prisma/client';

@Controller('schools')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  async createSchool(@Body() data: CreateSchoolDto): Promise<School> {
    return this.schoolService.createSchool(data);
  }

  @Get()
  async getSchools(): Promise<School[]> {
    return this.schoolService.getSchools();
  }

  @Get(':id')
  async getSchoolById(@Param('id') id: number): Promise<School> {
    return this.schoolService.getSchoolById(id);
  }

  @Put(':id')
  async updateSchool(
    @Param('id') id: number,
    @Body() data: UpdateSchoolDto,
  ): Promise<School> {
    return this.schoolService.updateSchool(id, data);
  }

  @Delete(':id')
  async deleteSchool(@Param('id') id: number): Promise<School> {
    return this.schoolService.deleteSchool(id);
  }
}
