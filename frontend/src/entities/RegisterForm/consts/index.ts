import { Errors, RegisterForm } from "../model/types";

export const INITIAL_FORM: RegisterForm = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
}

export const INITIAL_ERRORS: Errors = {
  username: false,
  email: false,
  password: false,
  repeatPassword: false,
}
