import { NestFactory } from '@nestjs/core';
import { NgerMessageCenterApiModule } from './api/lib';
export async function bootstrap() {
    const app = await NestFactory.create(NgerMessageCenterApiModule)
    app.listen(9000)
}
bootstrap();
