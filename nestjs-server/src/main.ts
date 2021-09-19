import { ValidationPipe } from '@nestjs/common';
import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const PORT = process.env.PORT || 9000;
  const path = require('path');
  const express = require('express');

  // Have Node.js (express) serve the build files from our built React app
  app.use(express.static(path.resolve(__dirname, '../../react-client/build')));

  // enables Cross-Origin Resource Sharing (allows communication w/ frontend)
  app.enableCors();

  await app.listen(PORT, () => {
    console.log(`SERVER listening on ${PORT}`);
  });
}
bootstrap();
