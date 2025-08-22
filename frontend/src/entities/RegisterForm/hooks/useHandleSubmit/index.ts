import { useUserStore } from "@/entities/User";
import { useRegisterFormStore } from "../../model"
import { useRouter } from "next/navigation";
import { registerUser } from "../../api";

export const useHandleSubmit = () => {
  const { form, validate, reset } = useRegisterFormStore();
  const { login } = useUserStore();
  const router = useRouter();

  const handleSubmit = async () => {
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

  return { handleSubmit }
}
