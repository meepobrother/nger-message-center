import { Controller } from "@nestjs/common";
import { Subscription, Mutation } from '@nestjs/graphql';
import { pubsub } from '../pubsub';
import { ForbiddenError } from 'apollo-server-express';
interface VoiceMessage {
    toUserName: string;
    fromUserName: string;
    createTime: number;
    msgType: string;
    mediaId: string;
    format: string;
    recognition: string;
    msgId: number;
}
interface SendVoiceMessageResult {
    success: boolean;
}
@Controller()
export class VoiceMessageGraphql {
    @Subscription()
    receiveVoiceMessage(): AsyncIterator<VoiceMessage> {
        return pubsub.asyncIterator(`receiveVoiceMessage`)
    }

    @Mutation()
    async sendVoiceMessage(input: VoiceMessage): Promise<SendVoiceMessageResult> {
        throw new ForbiddenError(`developing...`)
    }
}
