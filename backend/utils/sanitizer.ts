import { User, UserTask } from 'entity';
import { use } from 'passport';

export const generateSanitizeduser = (data: User[]) => {
  const newData = data.map(({ name, photo, username, totalPoints }) => ({
    name,
    photo,
    username,
    totalPoints,
  }));
  return newData;
};

export const generateSanitizedUserFromUserTask = (data: UserTask[]) => {
  const newData = data.map((currentUser) => {
    const { name, photo, username } = currentUser.user;
    const totalPoints = currentUser.assignedPoints;
    return { name, photo, username, totalPoints };
  });
  return newData;
};
