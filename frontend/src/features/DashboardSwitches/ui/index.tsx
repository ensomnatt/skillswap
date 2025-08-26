import { DashboardPageId } from "@/entities/Dashboard";
import DashboardSwitch from "@/features/DashboardSwitch";

export default function DashboardSwitches() {
  const enumValues = Object.values(DashboardPageId).filter(v => typeof v === "number");

  return (
    <div className="border-b">
      {enumValues.map((id, index) => (
        <DashboardSwitch key={id} id={id} isLast={index === enumValues.length - 1} />
      ))}
    </div>
  );
}
