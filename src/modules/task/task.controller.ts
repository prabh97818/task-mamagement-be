import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TaskDto } from './task.dto';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.find();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: TaskDto): Promise<Task[]> {
    return await this.taskService.create(new Task(data));
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id, @Body() data: TaskDto): Promise<Task[]> {
    return await this.taskService.update(id, data);
  }
}
