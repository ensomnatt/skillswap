import { BENEFITS } from "../consts";
import Benefit from "@/shared/ui/Benefit";

export default function BenefitsList() {
  return (
    <ul className="text-xl flex flex-col gap-3">
      {BENEFITS.map((benefit, index) => (
        <Benefit key={index} label={benefit} />
      ))}
    </ul>
  );
}
