import { ObjectID } from 'typeorm';
export enum TASK_STATUS {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  REVIEW = 'REVIEW',
  DONE = 'DONE',
}

export class TaskDto {
  readonly title: string;
  readonly description: string;
  readonly dueDate: Date;
  readonly status: TASK_STATUS;
  readonly assignee: ObjectID;
  readonly projectId: ObjectID;
}
