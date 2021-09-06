import express from 'express';
import { IDbConnection } from '../../../Infrastructure/database';
import { createTodoRouter } from './todoRouter';

export const createRouter = (dbConnection: IDbConnection) => {
  const router = express.Router();
  router.use('/todo', createTodoRouter(dbConnection));
  return router;
};
