import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService,{
    provide: PrismaClient,
    useValue: new PrismaClient(),
  },],
})
export class AppModule {}
