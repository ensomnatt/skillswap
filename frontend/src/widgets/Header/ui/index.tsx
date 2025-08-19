"use client";

import { useEffect, useState } from "react";
import Black from "@/shared/ui/Black";
import Link from "next/link";
import HydrationWarning from "@/shared/ui/HydrationWarning";
import Button from "@/shared/ui/Button";

export default function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <HydrationWarning />
    );
  }

  return (
    <header className="bg-white text-black px-10 py-6 flex justify-between items-center">
      {/*logo*/}
      <Link href="/" className="cursor-pointer">
        <Black
          width={80}
          height={30}
        />
      </Link>

      <div className="flex items-center gap-3">
        <Link href="/login">
          <Button
            label="Войти"
          />
        </Link>
        <Link href="/register">
          <Button
            label="Регистрация"
          />
        </Link>
      </div>
    </header>
  );
}
