"use client";
import { useUserStore } from "@/entities/User";
import BlackPlaceholder from "@/shared/ui/BlackPlaceholder";
import { FC, useEffect } from "react";

export const UserProfile: FC = () => {
  const { user, _hasHydrated } = useUserStore();

  useEffect(() => console.log(user), [user]);

  if (!_hasHydrated) {
    return (
      <div className="flex">
        <BlackPlaceholder className="w-[100] h-[100] rounded-[50]" />
        <div className="ml-[30]">
          <h1 className="text-2xl font-bold">Загрузка...</h1>
          <p className="text-md">...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <BlackPlaceholder className="w-[100] h-[100] rounded-[50]" />
      <div className="ml-[30]">
        <h1 className="text-2xl font-bold">
          {user?.username || "Имя"}
        </h1>
        <p className="text-md">
          {user?.description || "Описание"}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
