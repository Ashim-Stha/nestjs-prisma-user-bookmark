import { Controller, Get, UseGuards, Patch, Req, Body } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard) //for every endpoints below
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  //   @UseGuards(AuthGuard('jwt'))

  @Get('me')
  //   getMe(@Req() req: Request)
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch('me')
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
