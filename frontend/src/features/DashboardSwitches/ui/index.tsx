import { DashboardPages } from "@/entities/Dashboard";
import DashboardSwitch from "@/features/DashboardSwitch";

export default function DashboardSwitches() {
  const enumValues = Object.values(DashboardPages);

  return (
    <div className="border-b">
      {enumValues.map((page, index) => (
        <DashboardSwitch key={index} page={page} isLast={index === enumValues.length - 1} />
      ))}
    </div>
  );
}
