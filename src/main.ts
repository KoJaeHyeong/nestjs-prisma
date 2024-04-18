import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';
import { SwaggerModule } from '@nestjs/swagger';
import { ResponseInterceptor } from './response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = fs.readFileSync(path.join(__dirname, '../../src/swagger/swagger.json'), 'utf8');
  app.enableCors({credentials: true})
;  SwaggerModule.setup('/api/swagger', app, JSON.parse(swaggerConfig));
app.useGlobalInterceptors(new ResponseInterceptor())
  await app.listen(3000);
  console.log('SERVER_INIT');
}
bootstrap();
