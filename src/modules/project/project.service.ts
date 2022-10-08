import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { Project } from './project.entity';

@Injectable()
export class ProjectService extends BaseService<Project> {
  @InjectRepository(Project)
  _repository: Repository<Project>;
}
