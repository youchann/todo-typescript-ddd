import { Todo } from '../../Entity/TodoEntity';
import { IDbConnection } from '../../Infrastructure/database';
import { TodoRepository } from '../../Repository/TodoRepository';
import { ITodoRepository } from '../../Repository/types/ITodoRepository';

export abstract class ITodoService {
  protected todoRepository: ITodoRepository;

  constructor(dbConnection: IDbConnection) {
    this.todoRepository = new TodoRepository(dbConnection);
  }

  // abstract find(id: number): Promise<Todo>;
  abstract list(): Promise<Todo[]>;
  // abstract create(todo: Todo): Promise<number>;
  // abstract update(todo: Todo): Promise<number>;
  // abstract delete(id: number): Promise<number>;
}
