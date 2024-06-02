import { Module } from '@nestjs/common';
import { DistributionEventService } from './distributionevent.service';
import { DistributionEventController } from './distributionevent.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [DistributionEventService, PrismaService],
  controllers: [DistributionEventController],
})
export class DistributionEventModule {}
