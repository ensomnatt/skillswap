"use client";

import AlreadyHaveAccount from "@/features/AlreadyHaveAccount";
import RegisterButton from "@/features/RegisterButton";
import { handleSubmit, useRegisterFormStore } from "@/entities/RegisterForm";
import RegisterInputs from "@/features/RegisterInputs";
import { useUserStore } from "@/entities/User";
import { useRouter } from "next/navigation";

export default function Register() {
  const { form, validate, reset } = useRegisterFormStore();
  const { login } = useUserStore();
  const router = useRouter();
  return (
    <div className="min-h-[calc(100vh-88px)] flex justify-center items-center">
      <div className="md:border border-black w-[400] p-[40] flex flex-col justify-center items-center">
        <h1 className="mb-[24] text-[32px] font-bold">Регистрация</h1>
        <RegisterInputs />
        <RegisterButton
          onClick={() => handleSubmit(form, validate, reset, login, router)}
          label="Создать аккаунт"
          className="mt-[24] font-bold w-[318px] py-[15]"
        />
        <AlreadyHaveAccount className="mt-[15]" />
      </div>
    </div>
  );
}
