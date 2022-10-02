import { Controller, Post, Get, Body } from '@nestjs/common';
import { TeamMemberDto } from './team-member.dto';
import { TeamMember } from './team-member.entity';
import { TeamMemberService } from './team-member.service';

@Controller('team-member')
export class TeamMemberController {
  constructor(private teamMemberService: TeamMemberService) {}

  @Get()
  async findAll(): Promise<TeamMember[]> {
    return this.teamMemberService.find();
  }

  @Post()
  async create(@Body() data: TeamMemberDto): Promise<TeamMember[]> {
    return await this.teamMemberService.create(new TeamMember(data));
  }
}
