import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService extends BaseService<Task> {
  @InjectRepository(Task)
  _repository: Repository<Task>;
}
