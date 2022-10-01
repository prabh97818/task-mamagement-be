import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamService extends BaseService<Team> {
  @InjectRepository(Team)
  _repository: Repository<Team>;
}
