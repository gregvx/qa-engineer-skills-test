import * as http from 'http';

import { AuthenticationApplication } from './app/app';
import { logger } from './app/util/logger';

const APP_PORT = 9876;

async function bootstrap(): Promise<void> {
  const authApplication = new AuthenticationApplication();
  await authApplication.init();
  const server = http.createServer(authApplication.app);
  server.listen(APP_PORT);
  server.on('error', err => logger.error('App error', err));
}

bootstrap()
  .then(() => logger.info(`Server listening on port http://localhost:${APP_PORT}`))
  .catch(err => logger.error('Server error', err.details || err));
