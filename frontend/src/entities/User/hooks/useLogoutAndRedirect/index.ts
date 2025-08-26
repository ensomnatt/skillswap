import { useRouter } from "next/navigation";
import { useUserStore } from "../../model"

export const useLogoutAndRedirect = () => {
  const { logout } = useUserStore();
  const router = useRouter();

  const logoutAndRedirect = () => {
    logout();
    router.replace("/");
  }

  return { logoutAndRedirect };
}
