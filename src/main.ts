import 'dotenv/config'
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Logger.log(`Ini adalah pesan Log ${env.PORT}`, "Percobaan")
  await app.listen(env.PORT);
}
bootstrap();
