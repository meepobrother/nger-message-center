import { Controller } from "@nestjs/common";
import { Subscription, Mutation } from '@nestjs/graphql';
import { pubsub } from '../pubsub';
import { ForbiddenError } from 'apollo-server-express';
interface ShortVideoMessage {
    toUserName: string;
    fromUserName: string;
    createTime: number;
    msgType: string;
    mediaId: string;
    thumbMediaId: string;
    msgId: number;
}
interface SendShortVideoMessageResult {
    success: boolean;
}
@Controller()
export class ShortVideoMessageGraphql {
    @Subscription()
    receiveShortVideoMessage(): AsyncIterator<ShortVideoMessage> {
        return pubsub.asyncIterator(`receiveShortVideoMessage`)
    }

    @Mutation()
    async sendShortVideoMessage(input: ShortVideoMessage): Promise<SendShortVideoMessageResult> {
        throw new ForbiddenError(`developing...`)
    }
}
