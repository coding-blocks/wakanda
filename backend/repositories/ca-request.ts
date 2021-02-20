import { EntityRepository, Repository } from 'typeorm';
import { Request } from '../entity';
@EntityRepository(Request)
class RequestRepository extends Repository<Request> {
  async findById(id: number): Promise<Request> {
    const request = await this.findOne(id);
    if (!request) throw new Error('ERR_REQUEST_NOT_FOUND');
    return request;
  }
}

export default RequestRepository;
