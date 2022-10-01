import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

export type TeamDocument = Team & Document;

@Entity('team')
export class Team {
  @ObjectIdColumn() id: ObjectID;
  @Column() name: string;
  @Column() description: string;

  constructor(team?: Partial<Team>) {
    Object.assign(this, team);
  }
}
