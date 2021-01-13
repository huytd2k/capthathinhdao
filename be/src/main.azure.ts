import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './core/guards/auth.guard';

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // Guard config
  const configService = app.get<ConfigService>(ConfigService);
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new AuthGuard(configService, reflector));

  await app.init();
  return app;
}
