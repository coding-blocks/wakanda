import { Submission } from '../entity';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(Submission)
class SubmissionRepository extends Repository<Submission> {
  async saveWithAssets(req, payload): Promise<Submission> {
    return this.save({
      ...payload,
      submittedAt: '2021-01-27T05:16:23.000Z',
    });
  }
}

export default SubmissionRepository;
