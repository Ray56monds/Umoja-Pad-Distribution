import { Module } from '@nestjs/common';
import { BeneficiaryService } from './beneficiary.service';
import { BeneficiaryController } from './beneficiary.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [BeneficiaryService, PrismaService],
  controllers: [BeneficiaryController],
})
export class BeneficiaryModule {}
