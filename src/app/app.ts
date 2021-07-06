import * as express from 'express';
import * as path from 'path';

import { HomeRoutes } from './home';
import { LoginRoutes } from './login';
import { logger } from './util';
import { RegisterRoutes } from './register';

export class AuthenticationApplication {
  public readonly app = express();
  private readonly loginRouter = new LoginRoutes();
  private readonly homeRouter = new HomeRoutes();
  private readonly registerRouter = new RegisterRoutes();

  public init(): void {
    this.initRoutes();
  }

  protected initRoutes(): void {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use('/public', express.static(path.join(__dirname, 'public')));
    this.app.get('/v1/health', this.healthCheck.bind(this));
    this.app.get('/', this.loginRouter.getLogin);
    this.app.post('/', this.loginRouter.postLogin);
    this.app.get('/home', this.homeRouter.home);
    this.app.get('/home/:id', this.homeRouter.home);
    this.app.get('/register', this.registerRouter.getRegister);
    this.app.post('/register', this.registerRouter.postRegister);
  }

  protected healthCheck(_req: express.Request, res: express.Response): express.Response {
    logger.info('HEALTH CHECK 200');
    return res.json({
      status: 'up',
    });
  }
}
