import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SubmissionAsset } from './submission-asset';
@Entity()
export class Submission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  @Column({ type: 'timestamp' })
  submittedAt: Date;

  @OneToMany(() => SubmissionAsset, (submissionAsset) => submissionAsset.submission, {
    cascade: true,
  })
  submissionAsset: SubmissionAsset[];
}
