import { Errors, RegisterForm } from "../model/types";

export const INITIAL_FORM: RegisterForm = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
}

export const INITIAL_ERRORS: Errors = {
  name: false,
  email: false,
  password: false,
  repeatPassword: false,
}
