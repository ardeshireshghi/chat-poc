import { ISender } from './user';

export interface IMessage {
  id: number;
  createdAt: Date;
  text: string;
  sender: ISender;
}
