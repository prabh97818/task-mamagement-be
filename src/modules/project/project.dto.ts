import { ObjectID } from 'typeorm';

export class ProjectDto {
  readonly name: string;
  readonly description: string;
  readonly teams: ObjectID[];
}
