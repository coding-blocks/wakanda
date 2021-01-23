import { User } from 'entity';
import { getCustomRepository } from 'typeorm';
import UserRepository from 'repositories/user';
import { OneauthUser } from '../services/oneauth';
import { UserRole } from 'entity/user';

export const oneauthUserToUpdateOpts = (oneauthUser: OneauthUser) => ({
  name: oneauthUser.name,
  email: oneauthUser.email,
  username: oneauthUser.username,
  // photo: oneauthUser.photo,
});

export const oneauthUserToCreateOpts = (oneauthUser: OneauthUser) => ({
  oneauth_id: oneauthUser.id,
  name: oneauthUser.name,
  email: oneauthUser.email,
  username: oneauthUser.username,
  // photo: oneauthUser.photo,
  role: UserRole.DEFAULT,
});

export const upsertUser = async (oneauthUser: OneauthUser): Promise<User> => {
  const dbUser = await UserRepository.findOne({
    where: {
      oneauth_id: oneauthUser.id,
    },
  });

  if (dbUser) {
    await UserRepository.update(dbUser.id, oneauthUserToUpdateOpts(oneauthUser));

    return UserRepository.findOne(dbUser.id);
  }

  return UserRepository.create(oneauthUserToCreateOpts(oneauthUser));
};
