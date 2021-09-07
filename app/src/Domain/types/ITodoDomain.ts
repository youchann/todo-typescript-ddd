import { Todo } from '../../Entity/TodoEntity';
import { IDbConnection } from '../../Infrastructure/database';
import { TodoRepository } from '../../Repository/TodoRepository';
import { ITodoRepository } from '../../Repository/types/ITodoRepository';

export abstract class ITodoDomain {
  protected todoRepository: ITodoRepository;

  constructor(dbConnection: IDbConnection) {
    this.todoRepository = new TodoRepository(dbConnection);
  }

  abstract exists(todo: Todo): Promise<boolean>;
}
