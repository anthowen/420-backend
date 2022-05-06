import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LandService } from './land.service';
import { LandController } from './land.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  providers: [LandService],
  controllers: [LandController],
  exports: [LandService],
})
export class LandModule {}
