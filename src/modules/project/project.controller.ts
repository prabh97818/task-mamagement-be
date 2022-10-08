import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProjectDto } from './project.dto';
import { Project } from './project.entity';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectService.find();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: ProjectDto): Promise<Project[]> {
    return await this.projectService.create(new Project(data));
  }
}
