import { EntityRepository, Repository } from 'typeorm';
import { Workshop } from '../entity';
@EntityRepository(Workshop)
class WorkshopRepository extends Repository<Workshop> {
  async findById(id: number): Promise<Workshop> {
    const workshop = await this.findOne(id, {
      relations: ['WorkshopAssets'],
    });
    if (!workshop) throw new Error('ERR_WORKSHOP_NOT_FOUND');
    return workshop;
  }
}

export default WorkshopRepository;
