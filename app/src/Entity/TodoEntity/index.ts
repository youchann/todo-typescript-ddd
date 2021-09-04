import { Id } from './id';
import { IsDone } from './isDone';
import { Memo } from './memo';
import { Name } from './name';

export type TodoEntityPayload = {
  id?: Id;
  name: Name;
  memo?: Memo;
  isDone?: IsDone;
  createdAt?: Date;
  updatedAt?: Date;
};

export class Todo {
  public readonly id: Id | null;
  public name: Name;
  public memo: Memo;
  public isDone: IsDone;
  public createdAt: Date | null;
  public updatedAt: Date | null;

  constructor(payload: TodoEntityPayload) {
    this.id = payload.id || null;
    this.name = payload.name;
    this.memo = payload.memo || new Memo('');
    this.isDone = payload.isDone || new IsDone(false);
    this.createdAt = payload.createdAt || new Date();
    this.updatedAt = payload.updatedAt || null;
  }

  public toggleDone() {
    this.isDone = new IsDone(!this.isDone.value);
  }
}
