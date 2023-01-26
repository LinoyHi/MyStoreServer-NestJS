import { NestMiddleware } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { Request, Response, NextFunction } from 'express';
export declare class UserCheckMiddleware implements NestMiddleware {
    private readonly usersService;
    constructor(usersService: UsersService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
