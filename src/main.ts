import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import HttpExceptionFilter from './common/filters/http-exception.filter';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(helmet());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  app.use(cors()); // Enable CORS
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
