import { Module } from '@nestjs/common';
import { NgoService } from './ngo.service';
import { NgoController } from './ngo.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NgoController],
  providers: [NgoService],
})
export class NgoModule {}
