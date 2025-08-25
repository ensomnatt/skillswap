"use client";

import { useUserStore } from "@/entities/User";

export default function UserStats() {
  const { user } = useUserStore();
  return (
    <h1 className="text-lg">Баланс: {user?.tokens || 0} токенов</h1>
  );
}
