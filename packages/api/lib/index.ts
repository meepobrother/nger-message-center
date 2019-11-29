import { Module } from '@nestjs/common'
import { TextMessageGraphql } from './receive/text.graphql';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HomeGraphql } from './receive/home.graphql';
@Module({
    providers: [
        TextMessageGraphql,
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