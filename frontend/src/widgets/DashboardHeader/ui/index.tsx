import UserProfile from "@/features/UserProfile"
import UserStats from "@/features/UserStats";

export default function DashboardHeader() {
  return (
    <div className="border-b w-full h-[200] flex justify-between items-center">
      <UserProfile />
      <UserStats />
    </div>
  );
}
