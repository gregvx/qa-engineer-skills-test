import { User } from './user.interface';

export const userGenerator = (id: number, emailAddress: string, password: string, name: string): User => ({
  emailAddress,
  id,
  name,
  password,
});
