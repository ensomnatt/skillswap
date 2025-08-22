"use client";

import { registerUser } from "../api";
import { User } from "@/entities/User";
import { RegisterForm } from "./types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleSubmit = async (
  form: RegisterForm,
  validate: () => boolean,
  reset: () => void,
  login: (user: User) => void,
  router: AppRouterInstance
) => {
  if (!validate()) return;

  const { repeatPassword, ...dataToSend } = form;

  console.log(dataToSend);

  try {
    const user = await registerUser(dataToSend);
    login(user);
    console.log(user);

    reset();
    router.replace("/dashboard");
  } catch (err: any) {
    console.error(`ошибка при регистрации: ${err.message}`);
  }

  reset();
}
