import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

export type TeamMemberDocument = TeamMember & Document;

@Entity('team-member')
export class TeamMember {
  @ObjectIdColumn() id: ObjectID;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column() email: string;
  @ObjectIdColumn() teams: ObjectID[];

  constructor(teamMember?: Partial<TeamMember>) {
    Object.assign(this, teamMember);
  }
}
