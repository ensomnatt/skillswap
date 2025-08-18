import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./service/prisma.service";

@Global()
@Module({
  providers: [PrismaService]
})
export class PrismaModule { }
