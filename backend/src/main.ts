import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  const logger = new Logger("Bootstrap");

  const port = configService.get<number>("PORT") || 3001;

  await app.listen(port);

  logger.log(`server running on http://localhost:${port}`);
}
bootstrap();
