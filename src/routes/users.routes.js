import { Router } from 'express';

import UsersController from '../app/controllers/UsersController';

const usersRouter = Router();

usersRouter.get('/', UsersController.index);

export default usersRouter;
