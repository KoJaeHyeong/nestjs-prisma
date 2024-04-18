import { INestApplication, Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient
  implements OnModuleInit {
  private readonly prisma = new PrismaClient();
  async onModuleInit() {
    await this.$connect();
  }

  async findAll() {
    // return this.prisma.
  }

}