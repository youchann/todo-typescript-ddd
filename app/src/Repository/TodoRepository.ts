import { Todo } from '../Entity/TodoEntity';
import { Id } from '../Entity/TodoEntity/id';
import { IsDone } from '../Entity/TodoEntity/isDone';
import { Memo } from '../Entity/TodoEntity/memo';
import { Name } from '../Entity/TodoEntity/name';
import { ITodoRepository } from './types/ITodoRepository';

export class TodoRepository extends ITodoRepository {
  private mapToEntity(row: any) {
    return new Todo({
      id: new Id(row.id),
      name: new Name(row.name),
      memo: new Memo(row?.memo),
      isDone: new IsDone(row.is_done === 1),
      createdAt: new Date(row.created_at),
      updatedAt: row.updated_at ? new Date(row.updated_at) : undefined,
    });
  }

  private getDoneValue(isDone: boolean) {
    return isDone ? 1 : 0;
  }

  async find(id: Id) {
    const result = await this.dbConnection.execute('select * from todo where id = ?', [id.value]);
    return this.mapToEntity(result[0]);
  }

  async list() {
    const result = await this.dbConnection.execute<any[]>('select * from todo');
    return result.map((r) => this.mapToEntity(r));
  }

  async create(todo: Todo) {
    const result = await this.dbConnection.execute(
      'insert into todo(name,memo,is_done) values (?,?,?)',
      [todo.name.value, todo.memo.value, this.getDoneValue(todo.isDone.value)]
    );
    return new Id(result.insertId);
  }

  async update(todo: Todo) {
    if (!todo.id) {
      throw new Error('idが入力されていません');
    }
    await this.dbConnection.execute(
      'update todo set name = ?, memo = ?, is_done = ? where id = ?',
      [todo.name.value, todo.memo.value, this.getDoneValue(todo.isDone.value), todo.id.value]
    );
    return todo.id;
  }

  async delete(id: Id) {
    await this.dbConnection.execute('delete from todo where id = ?', [id.value]);
    return id;
  }
}
