import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterDto } from '../dto/registerDto';
import { PrismaService } from 'src/prisma/service/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService
  ) { }
  async register(dto: RegisterDto) {
    try {
      const existing = await this.prisma.user.findFirst({
        where: {
          OR: [{ email: dto.email }, { username: dto.username }]
        }
      })

      if (existing) throw new ConflictException("Username or email is already exists");


    } catch {

    }
  }
}
