import { Request, Response } from 'express';

import { users } from '../users';

import { homePage } from './home.page';

export class HomeRoutes {
  public home(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const numId = id ? parseInt(id) : undefined;
    const user = users.find(u => u.id === numId);
    return res.send(homePage(user || ({} as any)));
  }
}
