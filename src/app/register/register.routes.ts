import { Request, Response } from 'express';
import { registerPage } from './register.page';
import { userGenerator, users } from '../users';

export class RegisterRoutes {
  public getRegister(_req: Request, res: Response) {
    return res.send(registerPage());
  }

  public postRegister(req: Request, res: Response) {
    const id = users[users.length - 1].id + 1;
    const { name, password, userName } = req.body;
    const user = userGenerator(id, userName, password, name);
    users.push(user);
    return res.redirect(`/home/${id}`);
  }
}
