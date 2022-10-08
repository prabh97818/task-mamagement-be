import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Team } from './team.entity';
import { TeamService } from './team.service';
import { TeamDto } from './team.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ObjectID } from 'typeorm';
import { TeamMemberService } from '../team-member/team-member.service';
import { TeamMember } from '../team-member/team-member.entity';

@Controller('team')
export class TeamController {
  constructor(
    private teamService: TeamService,
    private teamMemberService: TeamMemberService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Team[]> {
    return this.teamService.find();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/team-members')
  async findByTeamId(@Param('id') id: ObjectID): Promise<TeamMember[]> {
    return this.teamMemberService.find({
      where: {
        teams: { $eq: id },
      },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: TeamDto): Promise<Team[]> {
    return await this.teamService.create(new Team(data));
  }
}
