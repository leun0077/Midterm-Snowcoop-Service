import { JWT_OPTIONS } from './auth.constants';
import { JwtOptions } from './../../common/interfaces/jwt-options.interface';

export const authProviders = [
  {
    provide: JWT_OPTIONS,
    useValue: {
      expiresIn: 86400,
      secret: 'ngAtl-workshop',
    } as JwtOptions,
  },
];
