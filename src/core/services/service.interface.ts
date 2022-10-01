import { Repository } from 'typeorm';

export interface ServiceInterface<EntityClass> {
  _repository: Repository<EntityClass>;

  create(data: any): Promise<EntityClass[]>;

  update(id: any, data: any): Promise<EntityClass>;

  find(params?: any): Promise<EntityClass[]>;

  findOne(params?: any): Promise<EntityClass>;

  delete(id: any): Promise<any[]>;
}
