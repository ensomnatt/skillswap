import { Module } from '@nestjs/common';
import { SkillsService } from './service/skills.service';
import { SkillsController } from './controller/skills.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule
  ],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule { }
