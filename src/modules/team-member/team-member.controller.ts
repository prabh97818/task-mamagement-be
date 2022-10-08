import { Controller, Post, Get, Body, UseGuards, Param } from '@nestjs/common';
import { TeamMemberDto } from './team-member.dto';
import { TeamMember } from './team-member.entity';
import { TeamMemberService } from './team-member.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ObjectID } from 'typeorm';
import { TaskService } from '../task/task.service';
import { Task } from '../task/task.entity';

@Controller('team-member')
export class TeamMemberController {
  constructor(
    private teamMemberService: TeamMemberService,
    private taskService: TaskService,
  ) {}

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

  @UseGuards(JwtAuthGuard)
  @Get(':id/tasks')
  async findByTeamId(@Param('id') id: ObjectID): Promise<Task[]> {
    return this.taskService.find({
      where: {
        assignee: id,
      },
    });
  }
}
