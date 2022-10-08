import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { TeamMemberDto } from './team-member.dto';
import { TeamMember } from './team-member.entity';
import { TeamMemberService } from './team-member.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('team-member')
export class TeamMemberController {
  constructor(private teamMemberService: TeamMemberService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<TeamMember[]> {
    return this.teamMemberService.find();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: TeamMemberDto): Promise<TeamMember[]> {
    return await this.teamMemberService.create(new TeamMember(data));
  }
}
