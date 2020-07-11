import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import UserPostsController from '../controllers/UserPostsController';
import PostsController from '../controllers/PostsController';
import CommentsController from '../controllers/CommentsController';

const routes = Router();

routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.get('/users/:id/posts', UserPostsController.index);

routes.get('/posts', PostsController.index);
routes.get('/posts/:id/comments', CommentsController.index);

export default routes;
