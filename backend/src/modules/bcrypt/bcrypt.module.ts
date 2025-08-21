import { Module } from '@nestjs/common';
import { BcryptService } from './service/bcrypt.service';

@Module({
  providers: [BcryptService],
})
export class BcryptModule { }
