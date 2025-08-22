import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || "3001";

  app.enableCors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,DELETE,POST",
    credentials: true
  })

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix("api");

  await app.listen(port);
  console.log(`Server is running on http://localhost:${port}`);
}

bootstrap();
