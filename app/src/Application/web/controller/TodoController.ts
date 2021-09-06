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

  async list(_req: Express.Request, _res: Express.Request) {
    const todos = await this.todoService.list();
    return todos.map((todo) => this.todoSerializer.serialize(todo));
  }

  // async create(req: IControllerRequest, _res: IControllerResponse) {}

  // async update(req: IControllerRequest, _res: IControllerResponse) {}

  // async delete(req: IControllerRequest, _res: IControllerResponse) {}
}
