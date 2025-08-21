import { RegisterForm, RegisterFormErrors } from "@/entities/RegisterForm";

export const handleChange = (
  field: string,
  form: RegisterForm,
  setForm: React.Dispatch<React.SetStateAction<RegisterForm>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [field]: e.target.value });
  }

export const handleSubmit = (form: RegisterForm, setErrors: React.Dispatch<React.SetStateAction<RegisterFormErrors>>) => {
  const newErrors: RegisterFormErrors = { name: false, email: false, password: false, repeatPassword: false };
  if (!form.name) newErrors.name = true;
  if (!form.email.includes("@")) newErrors.email = true;
  if (form.password.length < 8) newErrors.password = true;
  if (form.password !== form.repeatPassword) newErrors.repeatPassword = true;

  setErrors(newErrors);
}
