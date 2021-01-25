import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { UserTask } from './user-task';

export enum TaskStatus {
  SCHEDULED = 'scheduled',
  IN_PROGRESS = 'progress',
  TO_REVIEW = 'review',
  COMPLETED = 'completed',
}
@Entity('tasks')
export class Task {
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

  @OneToMany(() => UserTask, (userTask) => userTask.task)
  userTasks: UserTask[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
