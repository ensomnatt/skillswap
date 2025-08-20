import Card from "@/widgets/Card";
import { STEP_CARDS } from "../consts";

export default function StepCards() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-[24]">
      {STEP_CARDS.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
}
