import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  // imports: [PrismaModule], --> no need after making PrismaModule global
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
