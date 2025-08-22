import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto, RegisterDto } from '../dto/auth.dto';
import { PrismaService } from 'src/prisma/service/prisma.service';
import { UsersService } from 'src/modules/users/service/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse, RegisterResponse } from '../responses/auth.response';
import * as bcrypt from "bcrypt";
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly jwtSerice: JwtService
  ) { }

  async register(dto: RegisterDto, res: Response): Promise<RegisterResponse> {
    try {
      const user = await this.usersService.createUser(dto);
      const payload = { uuid: user.user.uuid };
      const token = this.jwtSerice.sign(payload);

      res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24,
      });

      return { user: user.user }
    } catch (err) {
      throw err;
    }
  }

  async login(dto: LoginDto, res: Response): Promise<LoginResponse> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { email: dto.email }
      })

      if (!user) throw new NotFoundException("User not found");

      const isPasswordValid = await bcrypt.compare(dto.password, user.password);

      if (!isPasswordValid) throw new BadRequestException("Invalid password");

      const { password, ...userWithoutPassword } = user;

      const payload = { uuid: user.uuid };
      const token = this.jwtSerice.sign(payload);

      res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24,
      });

      return { user: userWithoutPassword }
    } catch (err) {
      throw err;
    }
  }
}
