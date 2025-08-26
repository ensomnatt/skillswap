"use client";

import { useRouter } from "next/navigation";
import { useUserStore } from "../../model"
import { useEffect } from "react";

export const useAuthRedirect = (redirectTo: string = "/") => {
  const { isAuth } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.replace(redirectTo);
    }
  }, [isAuth, router, redirectTo])

  return { isAuth };
}
