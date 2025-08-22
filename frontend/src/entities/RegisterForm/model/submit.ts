import { RegisterForm } from "./types";

export const handleSubmit = (form: RegisterForm, validate: () => boolean, reset: () => void) => {
  if (!validate()) return;

  reset();
}
