import { IDbConnection } from '../../../Infrastructure/database';
import { TodoRepository } from '../../../Repository/TodoRepository';
import { ITodoRepository } from '../../../Repository/types/ITodoRepository';

export class TodoController {
  private todoRepository: ITodoRepository;
  // private todoSerializer: TodoSerializer;
  constructor(dbConnection: IDbConnection) {
    // this.todoSerializer = new TodoSerializer();
    this.todoRepository = new TodoRepository(dbConnection);
  }
  // async find(req: IControllerRequest, _res: IControllerResponse) {}

  async list(_req: Express.Request, _res: Express.Request) {
    const todos = await this.todoRepository.list();
    // return this.todoSerializer.serializeMany(todos);
    return todos;
  }

  // async create(req: IControllerRequest, _res: IControllerResponse) {}

  // async update(req: IControllerRequest, _res: IControllerResponse) {}

  // async delete(req: IControllerRequest, _res: IControllerResponse) {}
}
