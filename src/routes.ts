import { Router, Request, Response } from 'express';

import {
  getTasks,
  saveTask,
  getTask,
  updateTask,
  finishedTask,
  removeTask,
} from './controller/TasksController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Home' });
});

routes.get('/tasks', getTasks);
routes.get('/tasks/:id', getTask);
routes.post('/tasks', saveTask);
routes.put('/tasks/:id', updateTask);
routes.patch('/tasks/:id', finishedTask); // the patch is preferable when you alter a single register in the DB
routes.delete('/tasks/:id', removeTask);
export default routes;
