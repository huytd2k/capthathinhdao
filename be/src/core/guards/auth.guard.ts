import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { StringHelper } from '../helpers/string.helper';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly configService: ConfigService,
    private readonly reflector: Reflector,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const isPrivate = this.reflector.get<boolean>(
      'isPrivate',
      context.getHandler(),
    );
    if (isPrivate) {
      const authHeader = request.headers.authorization;
      const requestToken = StringHelper.extractTokenFromHeader(authHeader);

      const apiSecret = this.configService.get<string>('API_SECRET');

      const isTokenMatch = requestToken === apiSecret;

      if (!isTokenMatch) return false;
    }

    return true;
  }
}
