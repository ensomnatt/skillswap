"use client";

import { useUserStore } from "@/entities/User";
import AdminButton from "@/features/AdminButton/ui";
import ProfileButton from "@/features/ProfileButton";
import LoginButton from "@/features/LoginButton";
import RegisterButton from "@/features/RegisterButton";
import Logo from "@/features/Logo";

export default function Header() {
  const { isAuth, user } = useUserStore();

  return (
    <header className="w-full bg-white border-b border-black">
      <div className="max-w-[1280px] mx-auto px-5 flex justify-between items-center py-6">
        <Logo />
        <div className="flex items-center gap-3">
          {user?.role === "admin" && <AdminButton />}
          {isAuth ? <ProfileButton /> : <> <LoginButton /> <RegisterButton label="Регистрация" /> </>}
        </div>
      </div>
    </header>
  );
}
