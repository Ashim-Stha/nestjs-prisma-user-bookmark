import { Controller, Post, Body, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth') // /auth
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup') // /auth/signup
  signup(
    //@Body() dto: AuthDto
    @Body('email') email: string,
    @Body('password', ParseIntPipe) password: string,
  ) {
    console.log({
      email,
      typeOfEmail: typeof email,
      password,
      typeOfPassword: typeof password,
    });
    return this.authService.signup();
  }

  @Post('signin') // /auth/signin
  signin() {
    return this.authService.signin();
  }
}
