import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user';

@Entity()
export class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  number: string;

  @Column()
  email: string;

  @Column()
  college: string;

  @Column()
  city: string;

  @Column()
  branch: string;

  @Column()
  graduationYear: string;

  @Column()
  fbLink: string;

  @Column('text')
  profiles: string;

  @Column('text')
  criteria: string;

  @Column('text')
  uniqueIdea: string;

  @Column('text')
  additionalInfo: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({ default: false })
  isApproved: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
