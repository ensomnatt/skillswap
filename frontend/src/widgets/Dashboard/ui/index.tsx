"use client";

import { useAuthRedirect } from "@/entities/User";
import DashboardBody from "@/widgets/DashboardBody";
import DashboardHeader from "@/widgets/DashboardHeader";

export default function Dashboard() {
  const { isAuth } = useAuthRedirect();

  if (!isAuth) return null;

  return (
    <div className="min-h-[calc(100vh-88px)]">
      <DashboardHeader />
      <DashboardBody />
    </div>
  )
}
