import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Task } from './task';
import { User } from './user';
import { Submission } from './submission';

export enum SubmissionStatus {
  DRAFT = 'draft',
  TO_REVIEW = 'review',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}
@Entity()
export class UserTask {
  @PrimaryColumn()
  userId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @PrimaryColumn()
  taskId: number;

  @ManyToOne(() => Task)
  @JoinColumn({ name: 'taskId' })
  task: Task;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({
    type: 'enum',
    enum: SubmissionStatus,
    default: SubmissionStatus.DRAFT,
  })
  status: SubmissionStatus;

  @OneToOne(() => Submission)
  @JoinColumn()
  submission: Submission;

  @Column({ default: 0 })
  assignedPoints: number;
}
