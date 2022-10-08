import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Team } from './team.entity';
import { TeamService } from './team.service';
import { TeamDto } from './team.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Team[]> {
    return this.teamService.find();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: TeamDto): Promise<Team[]> {
    console.log('data ->', data);
    return await this.teamService.create(new Team(data));
  }
}
