interface IMessageResponseSender {
  id: number;
  name: string;
}

export interface IMessageResponseItem {
  id: number;
  createdAt: string;
  text: string;
  sender: IMessageResponseSender;
}
export interface IMessageResponse {
  messages: IMessageResponseItem[];
}

export const mockMessages: IMessageResponse = {
  messages: [
    {
      id: 1,
      createdAt: '2021-03-04T12:02:57.006Z',
      text: 'Hey guys I’d like to start doing some wasm, what languages would you recommend I try?',
      sender: {
        id: 1,
        name: 'John'
      }
    },
    {
      id: 2,
      createdAt: '2021-03-04T12:03:08.080Z',
      text: 'I know a bit of C from school, but I know you can also use TypeScript or Rust.',
      sender: {
        id: 1,
        name: 'John'
      }
    },
    {
      id: 3,
      createdAt: '2021-03-04T12:03:22.079Z',
      text: 'Give Rust a go, it’s really cool.',
      sender: {
        id: 2,
        name: 'Alice'
      }
    }
  ]
};
