import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface UserAttributes {
  id: number;
  oneauth_id: string;
  name: string;
  email: string;
  username: string;
  role: string;
}

@Entity('users')
class User implements UserAttributes {
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

  @Column()
  role: string;
}

export default User;
