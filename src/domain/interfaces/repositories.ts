import { IUser } from '../models/user';
import { IMessage } from '../models/message';

export interface IChatMessageRepository {
  findMessagesByUserId(userId: IUser['id']): Promise<IMessage[]>;
}
