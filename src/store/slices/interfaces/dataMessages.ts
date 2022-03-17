import { ICurrentUser } from './session';

export interface IDataMessage {
  type: DataMessageType;
  message_id: string;
  room_sid: string;
  room_id?: string;
  to?: string; // user sid
  body: ISystemMsg | IChatMsg | WhiteboardMsg;
}

export interface ISystemMsg {
  type: SystemMsgType;
  time?: string;
  from: ICurrentUser;
  msg: string;
}

export interface IChatMsg {
  type: 'CHAT';
  message_id: string;
  time: string;
  isPrivate: boolean;
  from: ICurrentUser;
  msg: string;
}

export enum DataMessageType {
  USER = 'USER',
  SYSTEM = 'SYSTEM',
  WHITEBOARD = 'WHITEBOARD',
}

export enum SystemMsgType {
  RAISE_HAND = 'RAISE_HAND',
  LOWER_HAND = 'LOWER_HAND',
  OTHER_USER_LOWER_HAND = 'OTHER_USER_LOWER_HAND',
  FILE_UPLOAD = 'FILE_UPLOAD',
  INFO = 'INFO',
  ALERT = 'ALERT',
  SEND_CHAT_MSGS = 'SEND_CHAT_MSGS',
  RENEW_TOKEN = 'RENEW_TOKEN',
  UPDATE_LOCK_SETTINGS = 'UPDATE_LOCK_SETTINGS',
}

export interface WhiteboardMsg {
  type: WhiteboardMsgType;
  time?: string;
  from: ICurrentUser;
  msg: string;
}

export enum WhiteboardMsgType {
  INIT_WHITEBOARD = 'INIT_WHITEBOARD',
  SCENE_UPDATE = 'SCENE_UPDATE',
  POINTER_UPDATE = 'POINTER_UPDATE',
}
