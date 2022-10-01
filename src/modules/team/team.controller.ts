import { Controller, Get, Post } from '@nestjs/common';
import { Team } from './team.entity';
import { TeamService } from './team.service';
import { TeamDto } from './team.dto';

@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Get()
  async findAll(): Promise<Team[]> {
    return this.teamService.find();
  }

  @Post()
  async create(data: TeamDto): Promise<Team[]> {
    return await this.teamService.create({ data: 'one' });
  }
}
