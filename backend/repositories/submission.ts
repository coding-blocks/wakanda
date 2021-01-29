import { Submission } from '../entity';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(Submission)
class SubmissionRepository extends Repository<Submission> {
  async saveWithAssets(payload: Submission): Promise<Submission> {
    return this.save({
      ...payload,
      submittedAt: new Date(),
    });
  }
}

export default SubmissionRepository;
