import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { TaskModule } from '../task/task.module';
import { TeamMemberController } from './team-member.controller';
import { TeamMember } from './team-member.entity';
import { TeamMemberService } from './team-member.service';

@Module({
  imports: [TypeOrmModule.forFeature([TeamMember]), AuthModule, TaskModule],
  controllers: [TeamMemberController],
  providers: [TeamMemberService],
  exports: [TeamMemberService],
})
export class TeamMemberModule {}
