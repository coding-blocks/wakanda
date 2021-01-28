import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Submission } from './submission';

@Entity()
export class SubmissionAsset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  url: string;

  @Column()
  type: string;

  @Column()
  submissionId: number;

  @ManyToOne(() => Submission, (submission) => submission.submissionAsset)
  @JoinColumn({ name: 'submissionId' })
  submission: Submission;
}
