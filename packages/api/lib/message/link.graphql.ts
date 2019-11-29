import { Controller } from "@nestjs/common";
import { Subscription, Mutation } from '@nestjs/graphql';
import { pubsub } from '../pubsub';
import { ForbiddenError } from 'apollo-server-express';
interface LinkMessage {
    toUserName: string;
    fromUserName: string;
    createTime: number;
    msgType: string;
    title: string;
    description: string;
    url: string;
    msgId: number;
}
interface SendLinkMessageResult {
    success: boolean;
}
@Controller()
export class LinkMessageGraphql {
    @Subscription()
    receiveLinkMessage(): AsyncIterator<LinkMessage> {
        return pubsub.asyncIterator(`receiveLinkMessage`)
    }

    @Mutation()
    async sendLinkMessage(input: LinkMessage): Promise<SendLinkMessageResult> {
        throw new ForbiddenError(`developing...`)
    }
}
