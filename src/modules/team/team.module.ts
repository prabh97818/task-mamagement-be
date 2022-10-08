import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { Team } from './team.entity';
import { TeamMemberModule } from '../team-member/team-member.module';

@Module({
  imports: [TypeOrmModule.forFeature([Team]), TeamMemberModule],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
