import LastSkillCard from "@/features/LastSkillCard";
import { SKILL_CARDS } from "../consts";
import Card from "@/widgets/Card";

export default function SkillCards() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-[24]">
      {SKILL_CARDS.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
      <LastSkillCard />
    </div>
  );
}
