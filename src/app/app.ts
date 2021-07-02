import * as express from 'express';
import * as path from 'path';

import { logger } from './util/logger';
import { LoginRoutes } from './login/login.routes';

export class AuthenticationApplication {
  public readonly app = express();
  private readonly loginRouter = new LoginRoutes();

  public init(): void {
    this.initRoutes();
  }

  protected initRoutes(): void {
    this.app.use('/public', express.static(path.join(__dirname, 'public')));
    this.app.get('/v1/health', this.healthCheck.bind(this));
    this.app.get('/', this.loginRouter.getLogin);
  }

  protected healthCheck(
    _req: express.Request,
    res: express.Response
  ): express.Response {
    logger.info('HEALTH CHECK 200');
    return res.json({
      status: 'up',
    });
  }
}
