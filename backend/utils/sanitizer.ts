import { User } from 'entity';
import { use } from 'passport';

export const generateSanitizeduser = (data: User[]) => {
  const newData = data.map(({ name, photo, username, totalPoints }) => ({
    name,
    photo,
    username,
    totalPoints,
  }));
  console.log(data);
  console.log(newData);
  return newData;
};
