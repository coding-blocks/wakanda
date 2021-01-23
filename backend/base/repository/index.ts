import { Repository, getConnection } from 'typeorm';

export default abstract class BaseRepository<T> {
  modelType;
  constructor(modelType) {
    this.modelType = modelType;
  }

  get Instance(): Repository<T> {
    return getConnection().getRepository(this.modelType);
  }
}
