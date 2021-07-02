import { Request, Response } from 'express';

import { users } from '../users';

import { loginPage } from './login-page.fn';

export class LoginRoutes {
  public getLogin(req: Request, res: Response) {
    const header = req.headers['authorization'];
    if (header) {
      res.send('yolo');
    } else {
      res.send(loginPage());
    }
  }

  public postLogin(req: Request, res: Response) {
    const { emailAddress } = req.body;
    const user = users.find(u => u.emailAddress === emailAddress);
    console.info(user, users);
    if (user) {
      res.redirect(`/home/${user.id}`);
    } else {
      res.send(loginPage('Incorrect user name or password'));
    }
  }
}
