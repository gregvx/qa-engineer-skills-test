import { Request, Response } from 'express';

import { loginPage } from './login-page.fn';

export class LoginRoutes {
  public getLogin(_res: Request, res: Response) {
    res.send(loginPage());
  }
}
