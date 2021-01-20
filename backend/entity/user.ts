import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('users')
class User {
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
