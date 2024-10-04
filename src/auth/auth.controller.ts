import { Controller, Post, Body, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth') // /auth
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup') // /auth/signup
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin') // /auth/signin
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
