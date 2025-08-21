import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { LoginDto, RegisterDto } from '../dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("register")
  async register(@Body() body: RegisterDto) {
    try {
      return this.authService.register(body);
    } catch (err) {
      throw err;
    }
  }

  @Post("login")
  async login(@Body() body: LoginDto) {
    try {
      return this.authService.login(body);
    } catch (err) {
      throw err;
    }
  }
}
