"use client";

import { useUserStore } from "@/entities/User"
import BlackPlaceholder from "@/shared/ui/BlackPlaceholder"

export default function UserProfile() {
  const { user } = useUserStore();

  return (
    <div className="flex">
      <BlackPlaceholder className="w-[100] h-[100] rounded-[50]" />
      <div className="ml-[30]">
        <h1 className="text-2xl font-bold">{user?.username || "Имя"}</h1>
        <p className="text-md">{user?.description || "Описание"}</p>
      </div>
    </div>
  )
}
