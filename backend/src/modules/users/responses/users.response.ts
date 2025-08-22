import { UserWithoutPassword } from "src/common/types/UserWithoutPassword";

export class CreateUserResponse {
  user: UserWithoutPassword;
}

export class MeResponse {
  user: UserWithoutPassword;
}
