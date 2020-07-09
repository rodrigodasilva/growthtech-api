import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();

usersRouter.get('/', UsersController.index);
usersRouter.get('/:id', UsersController.show);

export default usersRouter;
