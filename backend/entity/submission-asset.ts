import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Submission } from './submission';

@Entity()
export class SubmissionAsset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  url: string;

  @Column({ nullable: true })
  type: string;

  @Column()
  submissionId: number;

  @ManyToOne(() => Submission, (submission) => submission.submissionAssets)
  @JoinColumn({ name: 'submissionId' })
  submission: Submission;
}
