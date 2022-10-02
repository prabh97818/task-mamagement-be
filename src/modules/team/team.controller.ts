import { Body, Controller, Get, Post } from '@nestjs/common';
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
  async create(@Body() data: TeamDto): Promise<Team[]> {
    console.log('data ->', data);
    return await this.teamService.create(new Team(data));
  }
}
