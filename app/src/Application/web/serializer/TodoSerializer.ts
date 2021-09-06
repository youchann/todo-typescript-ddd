import moment from 'moment';
import { Todo } from '../../../Entity/TodoEntity';

export class TodoSerializer {
  serialize(todo: Todo) {
    return {
      id: todo.id?.value,
      name: todo.name.value,
      memo: todo.memo.value,
      isDone: todo.isDone.value,
      createdAt: moment(todo.createdAt).format('YYYY/MM/DD hh:mm:ss'),
      updatedAt: todo.updatedAt ? moment(todo.updatedAt).format('YYYY/MM/DD hh:mm:ss') : null,
    };
  }
}
