import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AuthGuard } from './core/guards/auth.guard';
import { ConfigService } from '@nestjs/config';

dotenv.config({
  path: `.env`,
});
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Guard config
  const configService = app.get<ConfigService>(ConfigService);
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new AuthGuard(configService, reflector));

  // Swagger config
  const options = new DocumentBuilder()
    .setTitle('Capthathinhdao')
    .setDescription('Capthathinhdao API documents')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.APP_PORT || 3000;
  await app.listen(PORT);
}
bootstrap();
