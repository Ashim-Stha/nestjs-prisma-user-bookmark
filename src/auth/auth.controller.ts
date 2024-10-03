import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // /auth
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup') // /auth/signup
  signup() {
    return this.authService.signup();
  }

  @Post('signin') // /auth/signin
  signin() {
    return this.authService.signin();
  }
}
