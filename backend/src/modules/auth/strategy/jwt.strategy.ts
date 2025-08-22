import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          return req.cookies?.["jwt"] || null;
        }
      ]),
      secretOrKey: process.env.JWT_SECRET || "zalupa",
    });
  }

  async validate(payload: any) {
    if (!payload.uuid) {
      throw new UnauthorizedException("Unauthorized");
    }
    return { uuid: payload.uuid }
  }
}
