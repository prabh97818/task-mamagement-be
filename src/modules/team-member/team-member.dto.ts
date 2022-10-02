import { ObjectID } from 'typeorm';

export class TeamMemberDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly teams: ObjectID[];
}
