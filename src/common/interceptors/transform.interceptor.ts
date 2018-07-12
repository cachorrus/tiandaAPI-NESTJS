
import { Interceptor, NestInterceptor, ExecutionContext, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, stream$: Observable<any>): Observable<any> {
        // wrap the response in an object with 'data'
        return stream$.pipe(
            catchError( err => {
                // tslint:disable-next-line:no-console
                console.error( JSON.stringify(err));
                throw( new HttpException(
                    {
                        message: err.message,
                        error: true,
                    } , HttpStatus.BAD_GATEWAY ) );
            }),
            map( data => {
                return {
                    error: false,
                    data,
                };
            }));
    }

}