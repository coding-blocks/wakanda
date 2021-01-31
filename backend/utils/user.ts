import { User } from 'entity';
import { OneauthUser } from '../services/oneauth';
import { UserRole } from '../entity/user';
import { Repositories } from '../repositories/index';

export const oneauthUserToUpdateOpts = (oneauthUser: OneauthUser) => ({
  name: oneauthUser.name,
  email: oneauthUser.email,
  username: oneauthUser.username,
  photo: oneauthUser.photo,
});

export const oneauthUserToCreateOpts = (oneauthUser: OneauthUser) => ({
  oneauth_id: oneauthUser.id,
  name: oneauthUser.name,
  email: oneauthUser.email,
  username: oneauthUser.username,
  photo: oneauthUser.photo,
  role: UserRole.DEFAULT,
});

export const upsertUser = async (oneauthUser: OneauthUser): Promise<User> => {
  const dbUser = await Repositories.getInstance().user.findOne({
    where: {
      oneauth_id: oneauthUser.id,
    },
  });

  if (dbUser) {
    await Repositories.getInstance().user.update(dbUser.id, oneauthUserToUpdateOpts(oneauthUser));

    return Repositories.getInstance().user.findOne(dbUser.id);
  }

  return Repositories.getInstance().user.save(oneauthUserToCreateOpts(oneauthUser));
};
