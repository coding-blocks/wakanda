import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { UserTask } from './user-task';

export enum UserRole {
  ADMIN = 'admin',
  AMBASSADOR = 'ambassador',
  DEFAULT = 'default',
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  oneauth_id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  username: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.DEFAULT,
  })
  role: UserRole;

  @Column({
    nullable: true,
    default:
      'https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png',
  })
  photo: string;

  @OneToMany(() => UserTask, (userTask) => userTask.user)
  userTasks: UserTask[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: 0 })
  totalPoints: number;

  @Column({
    nullable: true,
  })
  caCode: string;

  @Column({
    nullable: true,
  })
  college: string;

  @Column({
    nullable: true,
  })
  manager: string;
}
