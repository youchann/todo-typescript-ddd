import express from 'express';
import { Todo } from '../../../Entity/TodoEntity';
import { IsDone } from '../../../Entity/TodoEntity/isDone';
import { Memo } from '../../../Entity/TodoEntity/memo';
import { Name } from '../../../Entity/TodoEntity/name';
import { IDbConnection } from '../../../Infrastructure/database';
import { TodoService } from '../../../Service/TodoService';
import { ITodoService } from '../../../Service/types/ITodoService';
import { TodoSerializer } from '../serializer/TodoSerializer';

export class TodoController {
  private todoService: ITodoService;
  private todoSerializer: TodoSerializer;
  constructor(dbConnection: IDbConnection) {
    this.todoSerializer = new TodoSerializer();
    this.todoService = new TodoService(dbConnection);
  }
  // async find(req: IControllerRequest, _res: IControllerResponse) {}

  async list(_req: express.Request, _res: express.Response) {
    const todos = await this.todoService.list();
    return todos.map((todo) => this.todoSerializer.serialize(todo));
  }

  async create(req: express.Request, _res: express.Response) {
    // TODO: validate
    const { name, memo, isDone } = req.body;
    const todo = new Todo({
      name: new Name(name),
      memo: new Memo(memo),
      isDone: new IsDone(isDone),
    })
    await this.todoService.create(todo);
    return this.todoSerializer.serialize(todo);
  }

  // async update(req: IControllerRequest, _res: IControllerResponse) {}

  // async delete(req: IControllerRequest, _res: IControllerResponse) {}
}
