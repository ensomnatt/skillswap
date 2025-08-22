import { UserRole } from "./enums";

export interface User {
  email: string;
  username: string;
  role: UserRole;
  tokens: number;
}
