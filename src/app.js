import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (error, request, response, next) => {
      return response.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
