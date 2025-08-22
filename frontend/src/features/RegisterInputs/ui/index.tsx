"use client";

import NameInput from "@/features/NameInput";
import EmailInput from "@/features/EmailInput";
import PasswordInput from "@/features/PasswordInput";
import RepeatPasswordInput from "@/features/RepeatPasswordInput";
import { useRegisterFormStore } from "@/entities/RegisterForm";

export default function RegisterInputs() {
  const { form, errors, setField } = useRegisterFormStore();
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[20]">
      <NameInput
        value={form.username}
        onChange={(e) => setField("username", e.target.value)}
        error={errors.username}
      />
      <EmailInput
        value={form.email}
        onChange={(e) => setField("email", e.target.value)}
        error={errors.email}
      />
      <PasswordInput
        value={form.password}
        onChange={(e) => setField("password", e.target.value)}
        error={errors.password}
      />
      <RepeatPasswordInput
        value={form.repeatPassword}
        onChange={(e) => setField("repeatPassword", e.target.value)}
        error={errors.repeatPassword}
      />
    </div>
  );
}
