import UserProfile from "@/features/UserProfile"
import UserStats from "@/features/UserStats";

export default function DashboardHeader() {
  return (
    <div className="border-b w-full h-[200] flex flex-col md:flex-row justify-between md:items-center py-3 md:py-0">
      <UserProfile />
      <UserStats />
    </div>
  );
}
