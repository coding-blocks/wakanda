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

  async findById(id: number): Promise<Submission> {
    const submission = await this.findOne(id, {
      relations: ['submissionAsset'],
    });
    if (!submission) throw new Error('ERR_SUBMISSION_NOT_FOUND');
    return submission;
  }
}

export default SubmissionRepository;
