import {
  CallHandler,
  ExecutionContext, HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express';
import { isPlainObject } from '@nestjs/common/utils/shared.utils';

export interface IResponse {
  success: boolean;
  message: string;
  data : object;
}

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        data = JSON.parse(data);
        console.log('data@@@@@',typeof data);

          const result: IResponse = {
            success: true,
            message: '성공,',
            // data:  JSON.parse(data);
            data: data
          }
          console.log(typeof data);
          return result;


      }),
    );
  }
}
