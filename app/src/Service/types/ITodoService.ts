import { Todo } from '../../Entity/TodoEntity';
import { ITodoRepository } from '../../Repository/types/ITodoRepository';

export abstract class ITodoService {
  protected todoRepository: ITodoRepository;

  constructor(todoRepository: ITodoRepository) {
    this.todoRepository = todoRepository;
  }

  // abstract find(id: number): Promise<Todo>;
  abstract list(): Promise<Todo[]>;
  // abstract create(todo: Todo): Promise<number>;
  // abstract update(todo: Todo): Promise<number>;
  // abstract delete(id: number): Promise<number>;
}
