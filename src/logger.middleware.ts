import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware {
  public use(req, res, next) {
    console.log('Request...');
    next();
  }
}
