import {MessageType} from "../constants/MessageType";

export interface Message {
    type: number;
    postSeq: number;
    nickname: string;
    content: string;
}

export const defaultMessage: Message = {
    type: MessageType.ENTER,
    postSeq: 0,
    nickname: "",
    content: ""
}