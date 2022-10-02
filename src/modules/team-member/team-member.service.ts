import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { TeamMember } from './team-member.entity';

@Injectable()
export class TeamMemberService extends BaseService<TeamMember> {
  @InjectRepository(TeamMember)
  _repository: Repository<TeamMember>;
}
