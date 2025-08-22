export class CreateUserDto {
  username: string;
  email: string;
  password: string;
}

export class RequestWithCookiesDto {
  user: {
    uuid: string
  }
}
