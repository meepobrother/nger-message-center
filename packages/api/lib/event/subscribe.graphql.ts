import { Controller } from "@nestjs/common";
import { Subscription, Mutation } from '@nestjs/graphql'
import { pubsub } from "../pubsub";
interface SubscribeEvent {
    /**
     * 开发者微信号
     */
    toUserName: string;
    /**
     * 发送方帐号（一个OpenID）
     */
    fromUserName: string;
    /**
     * 消息创建时间 （整型）
     */
    createTime: string;
    /**
     * 消息类型，event
     */
    msgType: string;
    /**
     * 事件类型，subscribe(订阅)、unsubscribe(取消订阅)
     */
    event: string;
}
interface SendSubscribeEventResult {
    success: boolean;
}
@Controller()
export class SubscribeEventGraphql {
    @Subscription()
    onSubscribeEvent(): AsyncIterator<SubscribeEvent> {
        return pubsub.asyncIterator(`onSubscribeEvent`)
    }

    @Mutation()
    async sendSubscribeEvent(input: SubscribeEvent): Promise<SendSubscribeEventResult> {
        throw new Error(`developing...`)
    }
}