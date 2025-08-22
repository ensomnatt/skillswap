export interface RegisterForm {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface RegisterFormApi extends Omit<RegisterForm, "repeatPassword"> { }

export type Errors = {
  username: boolean;
  email: boolean;
  password: boolean;
  repeatPassword: boolean;
}
