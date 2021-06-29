import * as express from 'express';

import { logger } from './util/logger';

export class AuthenticationApplication {
  public readonly app = express();

  public init(): void {
    this.initRoutes();
  }

  protected initRoutes(): void {
    this.app.get('/v1/health', this.healthCheck.bind(this));
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
