import { Controller, Get } from '@nestjs/common';
import { SkillsService } from '../service/skills.service';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) { }

  @Get()
  async getAll() {
    return await this.skillsService.getAll();
  }
}
