import { LoginForm, Errors } from "../model/types"

export const INITIAL_FORM: LoginForm = {
  username: "",
  email: "",
  password: "",
}

export const INITIAL_ERRORS: Errors = {
  username: false,
  email: false,
  password: false,
}
