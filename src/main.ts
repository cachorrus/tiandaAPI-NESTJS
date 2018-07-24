import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { AppModule } from './app.module';

// import * as express from 'express';
// import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(express.static(join(__dirname, 'public')));
  app.useStaticAssets(__dirname + '/public'); // http://localhost:3000/img/productos/S10_1949.jpg

  // const allowedOrigins = [
  //                     'http://localhost:3000',
  //                     'http://localhost:8100',
  //                     'http://localhost:8080',
  //                     'http://192.168.0.8:8100',
  //                   ];
  // app.use(cors({
  //     origin: (origin, callback) => {
  //       // allow requests with no origin
  //       // (like mobile apps or curl requests)
  //       if (!origin) return callback(null, true);
  //       if (allowedOrigins.indexOf(origin) === -1){
  //         const msg = 'The CORS policy for this site does not ' +
  //                   'allow access from the specified Origin.';
  //         return callback(new Error(msg), false);
  //       }
  //       return callback(null, true);
  //     },
  //   }));

  // app.use(cors({
  //   origin: '*',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   preflightContinue: false,
  //   optionsSuccessStatus: 200,
  // }));
  // enabling pre-flight
  // app.options("*", cors(corsConfig));

  /*const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
  };*/

  app.enableCors();
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  //   next();
  // });

  await app.listen(3000);
}
bootstrap();
