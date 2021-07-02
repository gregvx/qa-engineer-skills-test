import { userGenerator } from './user.generator';

export const users = [userGenerator(0, 'admin@swellcx.com', 'test123', 'Swell Team')];

export * from './user.generator';
export * from './user.interface';
