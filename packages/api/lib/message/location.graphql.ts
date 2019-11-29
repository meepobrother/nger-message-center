import { Controller } from "@nestjs/common";
import { Subscription, Mutation } from '@nestjs/graphql';
import { pubsub } from '../pubsub';
import { ForbiddenError } from 'apollo-server-express';
interface LocationMessage {
    toUserName: string;
    fromUserName: string;
    createTime: number;
    msgType: string;
    location_X: number;
    location_Y: number;
    scale: number;
    msgId: number;
}
interface SendLocationMessageResult {
    success: boolean;
}
@Controller()
export class LocationMessageGraphql {
    @Subscription()
    receiveLocationMessage(): AsyncIterator<LocationMessage> {
        return pubsub.asyncIterator(`receiveLocationMessage`)
    }

    @Mutation()
    async sendLocationMessage(input: LocationMessage): Promise<SendLocationMessageResult> {
        throw new ForbiddenError(`developing...`)
    }
}
