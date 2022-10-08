import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

export type ProjectDocument = Project & Document;

@Entity('project')
export class Project {
  @ObjectIdColumn() id: ObjectID;
  @Column() name: string;
  @Column() description: string;
  @ObjectIdColumn() teams: ObjectID[];

  constructor(project?: Partial<Project>) {
    Object.assign(this, project);
  }
}
