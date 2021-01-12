import { ForbiddenException } from '@nestjs/common';

export class StringHelper {
  static extractTokenFromHeader(str: string) {
    const isTokenValid =
      str && str.split(' ').length == 2 && str.split(' ')[0] === 'Bearer';
    if (!isTokenValid) throw new ForbiddenException();

    return str.split(' ')[1];
  }
}
