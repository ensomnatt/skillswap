import { benefits } from "../consts";
import Benefit from "@/shared/ui/Benefit";

export default function BenefitsList() {
  return (
    <ul className="text-xl flex flex-col gap-3">
      {benefits.map((benefit, index) => (
        <Benefit key={index} label={benefit} />
      ))}
    </ul>
  );
}
