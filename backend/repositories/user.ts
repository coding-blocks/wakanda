import { EntityRepository, getConnection, Repository } from 'typeorm';
import { User } from '../entity/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  findByName(firstName: string) {
    return this.findOne({ where: { name: firstName } });
  }
}

export default getConnection().getCustomRepository(UserRepository);
