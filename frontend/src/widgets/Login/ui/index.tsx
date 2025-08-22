"use client";

import { useHandleSubmit } from "@/entities/LoginForm";
import LoginButton from "@/features/LoginButton";
import LoginInputs from "@/features/LoginInputs";

export default function Login() {
  const { handleSubmit } = useHandleSubmit();

  return (
    <div className="min-h-[calc(100vh-88px)] flex justify-center items-center">
      <div className="md:border border-black w-[400] p-[40] flex flex-col justify-center items-center">
        <h1 className="mb-[24] text-[32px] font-bold">Вход в аккаунт</h1>
        <LoginInputs />
        <LoginButton
          onClick={handleSubmit}
          className="mt-[24] font-bold w-[318px] py-[15]"
        />
      </div>
    </div>
  );
}
