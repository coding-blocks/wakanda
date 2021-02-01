import { Submission } from '../entity';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(Submission)
class SubmissionRepository extends Repository<Submission> {
  async findById(id: number): Promise<Submission> {
    const submission = await this.findOne(id, {
      relations: ['submissionAssets'],
    });
    if (!submission) throw new Error('ERR_SUBMISSION_NOT_FOUND');
    return submission;
  }
}

export default SubmissionRepository;
