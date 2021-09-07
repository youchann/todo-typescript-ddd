import express from 'express';
import { Todo } from '../../../Entity/TodoEntity';
import { Id } from '../../../Entity/TodoEntity/id';
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

  async find(req: express.Request, _res: express.Response) {
    const { id } = req.params;
    const todo = await this.todoService.find(new Id(+id));
    return this.todoSerializer.serialize(todo);
  }

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
    });
    const result = await this.todoService.create(todo);
    return result.value;
  }

  async update(req: express.Request, _res: express.Response) {
    // TODO: validate
    const { name, memo, isDone } = req.body;
    const todo = new Todo({
      name: new Name(name),
      memo: new Memo(memo),
      isDone: new IsDone(isDone),
    });
    const result = await this.todoService.update(todo);
    return result.value;
  }

  async delete(req: express.Request, _res: express.Response) {
    const { id } = req.params;
    const result = await this.todoService.delete(new Id(+id));
    return result.value;
  }
}
