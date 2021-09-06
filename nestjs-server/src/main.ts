import { ValidationPipe } from '@nestjs/common';
import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // enables Cross-Origin Resource Sharing (allows communication w/ frontend)
  app.enableCors;

  await app.listen(process.env.PORT || 9000);
}
bootstrap();
