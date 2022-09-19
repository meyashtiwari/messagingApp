import { MessageType } from "../types"

export interface IMessage {
    messageData: MessageType;

    getMessageText(): string,
    getMessageType(): string,
    getCreationTime(): string,
    saveMessage(): boolean
}