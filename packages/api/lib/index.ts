import { Module } from '@nestjs/common'
import { TextMessageGraphql } from './message/text.graphql';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HomeGraphql } from './message/home.graphql';
import { ImageMessageGraphql } from './message/image.graphql';
import { LocationMessageGraphql } from './message/location.graphql';
import { ShortVideoMessageGraphql } from './message/shortvideo.graphql';
import { VideoMessageGraphql } from './message/video.graphql';
import { VoiceMessageGraphql } from './message/voice.graphql';
import { LinkMessageGraphql } from './message/link.graphql';
@Module({
    providers: [
        TextMessageGraphql,
        ImageMessageGraphql,
        LocationMessageGraphql,
        ShortVideoMessageGraphql,
        VideoMessageGraphql,
        VoiceMessageGraphql,
        LinkMessageGraphql,
        HomeGraphql
    ],
    imports: [
        GraphQLModule.forRootAsync({
            useFactory: () => {
                return {
                    typePaths: [join(__dirname, 'assets/NgerMessageCenterApi', 'magnus.server.graphql')],
                    subscriptions: 'graphql'
                }
            }
        })
    ]
})
export class NgerMessageCenterApiModule { }