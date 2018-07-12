import { createParamDecorator } from '@nestjs/common';

/*
 * retrieve the current user with a decorator
 * example of a controller method:
 * @Post()
 * someMethod(@JwtPayload() user: JwtPayload) {
 *   // do something with the user
 * }
 */

export const Payload = createParamDecorator((data, req) => {
    return req.user;
});
