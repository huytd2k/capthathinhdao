import { SetMetadata } from '@nestjs/common';

export const PrivateRoute = () => SetMetadata('isPrivate', true);
