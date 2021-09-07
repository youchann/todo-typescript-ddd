import { TodoDomain } from '../../Domain/TodoDomain';
import { ITodoDomain } from '../../Domain/types/ITodoDomain';
import { Todo } from '../../Entity/TodoEntity';
import { Id } from '../../Entity/TodoEntity/id';
import { IDbConnection } from '../../Infrastructure/database';
import { TodoRepository } from '../../Repository/TodoRepository';
import { ITodoRepository } from '../../Repository/types/ITodoRepository';

export abstract class ITodoService {
  protected todoRepository: ITodoRepository;
  protected todoDomain: ITodoDomain;

  constructor(dbConnection: IDbConnection) {
    this.todoRepository = new TodoRepository(dbConnection);
    this.todoDomain = new TodoDomain(dbConnection);
  }

  abstract find(id: Id): Promise<Todo>;
  abstract list(): Promise<Todo[]>;
  abstract create(todo: Todo): Promise<Id>;
  abstract update(todo: Todo): Promise<Id>;
  abstract delete(id: Id): Promise<Id>;
}
