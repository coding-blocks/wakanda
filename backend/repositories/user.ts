import { getConnection, EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { User } from '../entity/User';
@EntityRepository(User)
class UserRepository extends Repository<User> {
  findByName(firstName: string) {
    return this.findOne({ where: { name: firstName } });
  }

  async findById(id: number): Promise<User> {
    const user = await this.findOne(id);
    if (!user) throw new Error('ERR_USER_NOT_FOUND');
    return user;
  }
}

export default UserRepository;
