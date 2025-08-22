import { create } from "zustand";
import { Errors, LoginForm } from "./types";
import { INITIAL_ERRORS, INITIAL_FORM } from "../consts";

interface LoginFormStore {
  form: LoginForm;
  errors: Errors;
  setField: (field: keyof LoginForm, value: string) => void;
  validate: () => boolean;
  reset: () => void;
}

export const useLoginFormStore = create<LoginFormStore>((set, get) => ({
  form: INITIAL_FORM,
  errors: INITIAL_ERRORS,

  setField: (field, value) => set((state) => ({ form: { ...state.form, [field]: value } })),

  validate: () => {
    const form = get().form;
    const newErrors: Errors = {
      email: !form.email.includes("@"),
      password: form.email.length < 8,
    };
    set({ errors: newErrors });
    return Object.values(newErrors).every((e) => !e);
  },

  reset: () => set({ form: INITIAL_FORM, errors: INITIAL_ERRORS }),
}));
