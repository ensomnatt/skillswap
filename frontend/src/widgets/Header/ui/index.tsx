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
    <header className="bg-white text-black px-10 py-6 flex justify-between items-center border-b-1 border-b-solid border-b-black">
      <Logo />

      <div className="flex items-center gap-3">
        {user?.role === "admin" && <AdminButton />}
        {isAuth ? <ProfileButton /> : <> <LoginButton /> <RegisterButton /> </>}
      </div>
    </header>
  );
}
