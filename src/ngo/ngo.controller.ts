import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { NgoService } from './ngo.service';
import { CreateNgoDto } from './dto/create-ngo.dto';
import { UpdateNgoDto } from './dto/update-ngo.dto';

@Controller('ngo')
export class NgoController {
  constructor(private readonly ngoService: NgoService) {}

  @Post()
  create(@Body() createNgoDto: CreateNgoDto) {
    return this.ngoService.create(createNgoDto);
  }

  @Get()
  findAll() {
    return this.ngoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ngoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateNgoDto: UpdateNgoDto) {
    return this.ngoService.update(+id, updateNgoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ngoService.remove(+id);
  }
}
