"use client";

import { RegisterForm, RegisterFormErrors } from "@/entities/RegisterForm";
import AlreadyHaveAccount from "@/features/AlreadyHaveAccount";
import EmailInput from "@/features/EmailInput";
import NameInput from "@/features/NameInput";
import PasswordInput from "@/features/PasswordInput";
import RegisterButton from "@/features/RegisterButton";
import RepeatPasswordInput from "@/features/RepeatPasswordInput";
import { useState } from "react";
import { handleChange, handleSubmit } from "../helpers";

export default function Register() {
  const [form, setForm] = useState<RegisterForm>({ name: "", email: "", password: "", repeatPassword: "" });
  const [errors, setErrors] = useState<RegisterFormErrors>({ name: false, email: false, password: false, repeatPassword: false });

  // инпуты не вынес в фичу, потому что тогда нужно ебаться с шейрингом стейта формы, а стор делать чисто для формы регистрации неразумно

  return (
    <div className="min-h-[calc(100vh-88px)] flex justify-center items-center">
      <div className="border border-black w-[400] p-[40] flex flex-col justify-center items-center">
        <h1 className="mb-[24] text-[32px] font-bold">Регистрация</h1>
        <div className="w-full flex flex-col justify-center items-center gap-[20]">
          <NameInput
            value={form.name}
            onChange={handleChange("name", form, setForm)}
            error={errors.name}
          />
          <EmailInput value={form.email} onChange={handleChange("email", form, setForm)} error={errors.email} />
          <PasswordInput
            value={form.password}
            onChange={handleChange("password", form, setForm)}
            error={errors.password}
          />
          <RepeatPasswordInput
            value={form.repeatPassword}
            onChange={handleChange("repeatPassword", form, setForm)}
            error={errors.repeatPassword}
          />
        </div>
        <RegisterButton onClick={() => handleSubmit(form, setErrors)} label="Создать аккаунт" className="mt-[24] font-bold w-[318] py-[15]" />
        <AlreadyHaveAccount className="mt-[15]" />
      </div>
    </div>
  );
}
