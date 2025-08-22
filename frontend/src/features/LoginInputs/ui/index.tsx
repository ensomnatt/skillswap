"use client";

import EmailInput from "@/features/EmailInput";
import PasswordInput from "@/features/PasswordInput";
import { useLoginFormStore } from "@/entities/LoginForm";

export default function LoginInputs() {
  const { form, errors, setField } = useLoginFormStore();
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[20]">
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
    </div>
  );
}
