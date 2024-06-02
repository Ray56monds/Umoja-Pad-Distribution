import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DistributionEventService } from './distributionevent.service';
import { CreateDistributionEventDto } from './dto/create-distributionevent.dto';
import { UpdateDistributionEventDto } from './dto/update-distributionevent.dto';

@Controller('distributionevent')
export class DistributionEventController {
  constructor(
    private readonly distributionEventService: DistributionEventService,
  ) {}

  @Post()
  create(@Body() createDistributionEventDto: CreateDistributionEventDto) {
    return this.distributionEventService.create(createDistributionEventDto);
  }

  @Get()
  findAll() {
    return this.distributionEventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distributionEventService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDistributionEventDto: UpdateDistributionEventDto,
  ) {
    return this.distributionEventService.update(
      +id,
      updateDistributionEventDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distributionEventService.remove(+id);
  }
}
