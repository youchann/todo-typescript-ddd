import { Todo } from '../../Entity/TodoEntity';
import { IDbConnection } from '../../Infrastructure/database';

export abstract class ITodoRepository {
  protected dbConnection: IDbConnection;

  constructor(dbConnection: IDbConnection) {
    this.dbConnection = dbConnection;
  }

  abstract find(id: number): Promise<Todo>;
  abstract list(): Promise<Todo[]>;
  abstract create(todo: Todo): Promise<number>;
  abstract update(todo: Todo): Promise<number>;
  abstract delete(id: number): Promise<number>;
}
