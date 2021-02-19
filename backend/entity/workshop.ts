import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Workshop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  collegeName: string;

  @Column()
  collegeAddress: string;

  @Column()
  topic: string;

  @Column({ type: 'timestamp', nullable: false })
  startDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  endDate: Date;

  @Column()
  monetary: string;

  @Column()
  accomodation: string;

  @Column()
  caId: string;

  @Column({ nullable: true })
  request: string;

  @Column({ nullable: true })
  mobile: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ default: false })
  isDone: boolean;
}
