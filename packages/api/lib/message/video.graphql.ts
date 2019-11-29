import { Controller } from "@nestjs/common";
import { Subscription, Mutation } from '@nestjs/graphql';
import { pubsub } from '../pubsub';
import { ForbiddenError } from 'apollo-server-express';
interface VideoMessage {
    toUserName: string;
    fromUserName: string;
    createTime: number;
    msgType: string;
    mediaId: string;
    thumbMediaId: string;
    msgId: number;
}
interface SendVideoMessageResult {
    success: boolean;
}
@Controller()
export class VideoMessageGraphql {
    @Subscription()
    receiveVideoMessage(): AsyncIterator<VideoMessage> {
        return pubsub.asyncIterator(`receiveVideoMessage`)
    }

    @Mutation()
    async sendVideoMessage(input: VideoMessage): Promise<SendVideoMessageResult> {
        throw new ForbiddenError(`developing...`)
    }
}
