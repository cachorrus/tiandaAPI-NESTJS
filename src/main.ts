import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';

// import * as express from 'express';
// import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(express.static(join(__dirname, 'public')));
  app.useStaticAssets(__dirname + '/public'); // http://localhost:3000/img/productos/S10_1949.jpg

  await app.listen(3000);
}
bootstrap();
