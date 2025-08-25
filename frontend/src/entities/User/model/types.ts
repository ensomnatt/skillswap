import { UserRole } from "./enums";

export interface User {
  email: string;
  username: string;
  description: string;
  role: UserRole;
  tokens: number;
}
