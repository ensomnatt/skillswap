export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export type RegisterFormErrors = {
  name: boolean;
  email: boolean;
  password: boolean;
  repeatPassword: boolean;
}
