import { User } from 'entity';
import UserRepository from '../repositories/user';
import { OneauthUser } from '../services/oneauth';
import { UserRole } from '../entity/user';
import { getCustomRepository } from 'typeorm';

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
  const dbUser = await getCustomRepository(UserRepository).findOne({
    where: {
      oneauth_id: oneauthUser.id,
    },
  });

  if (dbUser) {
    await getCustomRepository(UserRepository).update(
      dbUser.id,
      oneauthUserToUpdateOpts(oneauthUser),
    );

    return getCustomRepository(UserRepository).findOne(dbUser.id);
  }

  return getCustomRepository(UserRepository).create(oneauthUserToCreateOpts(oneauthUser));
};
