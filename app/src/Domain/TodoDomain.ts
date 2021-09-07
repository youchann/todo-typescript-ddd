import { Todo } from '../Entity/TodoEntity';
import { ITodoDomain } from './types/ITodoDomain';

export class TodoDomain extends ITodoDomain {
  async exists(todo: Todo) {
    const result = await this.todoRepository.findByName(todo.name);
    return !!result;
  }
}
