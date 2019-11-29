import { Controller } from "@nestjs/common";
import { Subscription, Mutation } from '@nestjs/graphql';
import { pubsub } from '../pubsub';
import { ForbiddenError } from 'apollo-server-express';
interface TextMessage {
    toUserName: string;
    fromUserName: string;
    createTime: number;
    msgType: string;
    content: string;
    msgId: number;
}
interface SendTextMessageResult {
    success: boolean;
}
@Controller()
export class TextMessageGraphql {
    @Subscription()
    receiveTextMessage(): AsyncIterator<TextMessage> {
        return pubsub.asyncIterator(`receiveTextMessage`)
    }

    @Mutation()
    async sendTextMessage(input: TextMessage): Promise<SendTextMessageResult> {
        throw new ForbiddenError(`developing...`)
    }
}
