export interface LoginForm {
  email: string;
  password: string;
}

export type Errors = {
  email: boolean;
  password: boolean;
}
