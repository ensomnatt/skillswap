import { DASHBOARD_PAGES } from "@/entities/Dashboard";
import DashboardSwitch from "@/features/DashboardSwitch";

export default function DashboardSwitches() {
  return (
    <div className="border-b">
      {DASHBOARD_PAGES.map((page, index) => (
        <DashboardSwitch key={index} page={page} isLast={index === DASHBOARD_PAGES.length - 1} />
      ))}
    </div>
  );
}
