import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Submission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  @Column({ type: 'timestamp' })
  submittedAt: Date;
}
