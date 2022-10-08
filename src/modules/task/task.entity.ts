import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { TASK_STATUS } from './task.dto';

export type TaskDocument = Task & Document;

@Entity('task')
export class Task {
  @ObjectIdColumn() id: ObjectID;
  @Column() title: string;
  @Column() description: string;
  @Column() dueDate: Date;
  @Column({ default: TASK_STATUS.TODO }) status: TASK_STATUS;
  @ObjectIdColumn() assignee: ObjectID;
  @ObjectIdColumn() projectId: ObjectID;

  constructor(task?: Partial<Task>) {
    Object.assign(this, task);
  }
}
