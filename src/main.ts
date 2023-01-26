import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials:true,
    origin:true
  })
  app.use(cookieParser());
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: true,
      cookie:{maxAge:3600*1000*24*30}//24 hours is - 3600*1000*24 | * 30 for 30
    }),
  )
  await app.listen(4005);
}
bootstrap();
