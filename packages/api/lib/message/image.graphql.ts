import { Controller } from "@nestjs/common";
import { Subscription, Mutation } from '@nestjs/graphql';
import { pubsub } from '../pubsub';
import { ForbiddenError } from 'apollo-server-express';
interface ImageMessage {
    toUserName: string;
    fromUserName: string;
    createTime: number;
    msgType: string;
    picUrl: string;
    mediaId: string;
    msgId: number;
}
interface SendImageMessageResult {
    success: boolean;
}
@Controller()
export class ImageMessageGraphql {
    @Subscription()
    receiveImageMessage(): AsyncIterator<ImageMessage> {
        return pubsub.asyncIterator(`receiveImageMessage`)
    }

    @Mutation()
    async sendImageMessage(input: ImageMessage): Promise<SendImageMessageResult> {
        throw new ForbiddenError(`developing...`)
    }
}
