import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from '../dto/users.dto';
import { PrismaService } from 'src/prisma/service/prisma.service';
import * as bcrypt from "bcrypt";
import { BCRYPT_SALT } from 'src/common/constants';
import { CreateUserResponse } from '../responses/users.response';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }
  async createUser(dto: CreateUserDto): Promise<CreateUserResponse> {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          OR: [{ username: dto.username }, { email: dto.email }]
        }
      })

      if (user) throw new ConflictException("User is already exists");

      const hash = await bcrypt.hash(dto.password, BCRYPT_SALT);

      const newUser = await this.prisma.user.create({
        data: {
          username: dto.username,
          email: dto.email,
          password: hash
        }
      })

      if (!newUser) throw new InternalServerErrorException("User not created");

      const { password, ...userWithoutPassword } = newUser;

      return { user: userWithoutPassword };
    } catch (err) {
      throw err;
    }
  }
}
