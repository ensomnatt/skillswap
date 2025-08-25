import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/service/prisma.service';
import { GetAllResponse } from '../responses/skills.responses';

@Injectable()
export class SkillsService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async getAll(): Promise<GetAllResponse> {
    try {
      const skills = await this.prisma.skill.findMany();
      return { skills: skills };
    } catch (err) {
      throw err;
    }
  }
}
