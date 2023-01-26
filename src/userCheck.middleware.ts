import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UserCheckMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) { }

  async use(req: Request, res: Response, next: NextFunction) {
    if(!req['session'].user && req.body?.user?.name){
      req['session'].user = await this.usersService.findByUsername(req.body.user.name)
    }
    if(req['session'].user){
      next();
    }
    else{
      res.send(HttpStatus.FORBIDDEN)
    }
  }
}
