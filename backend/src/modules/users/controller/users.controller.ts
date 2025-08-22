import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth.guard';
import { RequestWithCookiesDto } from '../dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get("me")
  @UseGuards(JwtAuthGuard)
  async me(@Req() req: RequestWithCookiesDto) {
    const uuid = req.user.uuid;
    return this.usersService.me(uuid);
  }
}
