import { create } from "zustand";
import { Errors, RegisterForm } from "./types";
import { INITIAL_ERRORS, INITIAL_FORM } from "../consts";

interface RegisterFormStore {
  form: RegisterForm;
  errors: Errors;
  setField: (field: keyof RegisterForm, value: string) => void;
  validate: () => boolean;
  reset: () => void;
}

export const useRegisterFormStore = create<RegisterFormStore>((set, get) => ({
  form: INITIAL_FORM,
  errors: INITIAL_ERRORS,

  setField: (field, value) => set((state) => ({ form: { ...state.form, [field]: value } })),

  validate: () => {
    const form = get().form;
    const newErrors: Errors = {
      name: !form.username,
      email: !form.email.includes("@"),
      password: form.email.length < 8,
      repeatPassword: form.password !== form.repeatPassword,
    };
    set({ errors: newErrors });
    return Object.values(newErrors).every((e) => !e);
  },

  reset: () => set({ form: INITIAL_FORM, errors: INITIAL_ERRORS }),
}));
