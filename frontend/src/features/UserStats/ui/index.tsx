"use client";

import { useUserStore } from "@/entities/User";
import { useLogoutAndRedirect } from "@/entities/User";
import LogoutButton from "@/features/LogoutButton";

export default function UserStats() {
  const { user } = useUserStore();
  const { logoutAndRedirect } = useLogoutAndRedirect();
  return (
    <div className="flex flex-col gap-[30]">
      <h1 className="text-lg">Баланс: {user?.tokens || 0} токенов</h1>
      <LogoutButton onClick={logoutAndRedirect} />
    </div>
  );
}
