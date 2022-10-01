import { Repository } from 'typeorm';
import { ServiceInterface } from './service.interface';

abstract class BaseService<EntityClass>
  implements ServiceInterface<EntityClass>
{
  abstract _repository: Repository<EntityClass>;

  get repository(): Repository<EntityClass> {
    return this._repository;
  }

  async create(data: any): Promise<EntityClass[]> {
    return await this._repository.create(data);
  }

  update(id: any, data: any): Promise<any> {
    return this._repository.update(id, data);
  }

  async delete(id: any[]) {
    return this._repository.delete(id).then(() => id);
  }

  find = (params?: any) => this._repository.find(params);

  findOne = (params?: any) => this._repository.findOne(params);
}

export { BaseService };
