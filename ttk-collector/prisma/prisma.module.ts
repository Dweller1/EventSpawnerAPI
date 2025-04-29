import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // <- makes it available everywhere without needing to import manually
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
