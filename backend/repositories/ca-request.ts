import { EntityManager, EntityRepository, getRepository, Repository } from 'typeorm';
import { Request } from '../entity';
import { object } from 'joi';
import UserRepository from './user';
@EntityRepository(Request)
class RequestRepository extends Repository<Request> {
  async findById(id: number): Promise<Request> {
    const request = await this.findOne(id);
    if (!request) throw new Error('ERR_REQUEST_NOT_FOUND');
    return request;
  }

  async updateCARole(payload: any, id: number): Promise<Request> {
    return this.manager.transaction(async (entityManager: EntityManager) => {
      const userRepo = entityManager.getCustomRepository(UserRepository);
      const request = await this.findOne({
        where: { id },
        relations: ['user'],
      });
      console.log(payload);
      await userRepo.updateRole(request.user.id, 'ambassador', payload.caCode);
      await this.update(id, { isApproved: true });
      return request;
    });
  }
}

export default RequestRepository;
