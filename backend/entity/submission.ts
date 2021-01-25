import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum SubmissionStatus {
  SCHEDULED = 'scheduled',
  IN_PROGRESS = 'progress',
  TO_REVIEW = 'review',
  COMPLETED = 'completed',
}

@Entity()
export class Submission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: SubmissionStatus,
    default: SubmissionStatus.SCHEDULED,
  })
  status: SubmissionStatus;

  @Column({ type: 'timestamp' })
  submittedAt: Date;
}
