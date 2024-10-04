import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth') // /auth
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup') // /auth/signup
  signup(@Body() dto: AuthDto) {
    console.log({
      dto,
    });
    return this.authService.signup();
  }

  @Post('signin') // /auth/signin
  signin() {
    return this.authService.signin();
  }
}
