import { IUser } from '../models/user';
import { IMessage } from '../models/message';

export interface IChatMessageService {
  fetchMessagesForUser(userId: IUser['id']): Promise<IMessage[]>;
}
