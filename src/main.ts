import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //automaticamente ignora del payload los atributos que no esten definidos en el DTO
      forbidNonWhitelisted: true, //si no esta en el DTO, lo alerta
    }),
  );
  await app.listen(3000);
}
bootstrap();
