"use client";

import { useUserStore } from "@/entities/User";
import { useLoginFormStore } from "../../model"
import { useRouter } from "next/navigation";
import { loginUser } from "../../api";

export const useHandleSubmit = () => {
  const { form, validate, reset } = useLoginFormStore();
  const { login } = useUserStore();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      const user = await loginUser(form);
      login(user.user);

      reset();
      router.replace("/dashboard");
    } catch (err: any) {
      console.error(`ошибка при входе: ${err.message}`);
    }

    reset();
  }

  return { handleSubmit }
}
