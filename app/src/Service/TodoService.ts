import { ITodoService } from './types/ITodoService';

export class TodoService extends ITodoService {
  async list() {
    const result = await this.todoRepository.list();
    return result;
  }
}
