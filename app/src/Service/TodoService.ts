import { Todo } from '../Entity/TodoEntity';
import { ITodoService } from './types/ITodoService';

export class TodoService extends ITodoService {
  async list() {
    const result = await this.todoRepository.list();
    return result;
  }

  async create(todo: Todo) {
    const result = await this.todoRepository.create(todo);
    return result;
  }
}
