import { UserRole } from "./enums";

export interface User {
  email: string;
  nickname: string;
  role: UserRole;
  tokens: number;
}
