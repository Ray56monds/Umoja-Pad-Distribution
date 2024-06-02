import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { SchoolModule } from './school/school.module';
import { BeneficiaryModule } from './beneficiary/beneficiary.module';
import { DistributionEventModule } from './distributionevent/distributionevent.module';
import { InventoryItemModule } from './inventory-item/inventory-item.module';
import { NgoModule } from './ngo/ngo.module';
import { APP_FILTER } from '@nestjs/core';
import HttpExceptionFilter from './common/filters/http-exception.filter';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    PrismaModule,
    SchoolModule,
    BeneficiaryModule,
    DistributionEventModule,
    InventoryItemModule,
    NgoModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
