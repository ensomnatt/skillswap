import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { LoginDto, RegisterDto } from '../dto/auth.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("register")
  async register(@Body() body: RegisterDto, @Res() res: Response) {
    try {
      return this.authService.register(body, res);
    } catch (err) {
      throw err;
    }
  }

  @Post("login")
  async login(@Body() body: LoginDto, @Res() res: Response) {
    try {
      return this.authService.login(body, res);
    } catch (err) {
      throw err;
    }
  }
}
