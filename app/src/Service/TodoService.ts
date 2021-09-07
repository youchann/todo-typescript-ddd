import { Todo } from '../Entity/TodoEntity';
import { Id } from '../Entity/TodoEntity/id';
import { ITodoService } from './types/ITodoService';

export class TodoService extends ITodoService {
  async find(id: Id) {
    const result = await this.todoRepository.find(id);
    return result;
  }

  async list() {
    const result = await this.todoRepository.list();
    return result;
  }

  async create(todo: Todo) {
    const result = await this.todoRepository.create(todo);
    return result;
  }

  async update(todo: Todo) {
    const result = await this.todoRepository.update(todo);
    return result;
  }

  async delete(id: Id) {
    const result = await this.todoRepository.delete(id);
    return result;
  }
}
