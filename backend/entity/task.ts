import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum TaskStatus {
  SCHEDULED = 'scheduled',
  IN_PROGRESS = 'progress',
  TO_REVIEW = 'review',
  COMPLETED = 'completed',
}
@Entity('tasks')
export class Taks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  points: number;

  @CreateDateColumn({ type: 'timestamp' })
  startDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  endDate: Date;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.SCHEDULED,
  })
  status: TaskStatus;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
