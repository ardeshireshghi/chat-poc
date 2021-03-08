import { ISender } from './user';

export interface IMessage {
  id: number;
  createdAt: Date;
  text: string;
  sender: ISender;
}

export class Message implements IMessage {
  public createdAt: Date;
  public id: number;

  constructor(public text: string, public sender: ISender) {
    this.createdAt = new Date();

    // This might have collision
    this.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }
}
