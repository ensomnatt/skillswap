import LinkToSkills from "@/features/LinkToSkills";
import Card from "@/widgets/Card";

export default function LastSkillCard() {
  return (
    <Card title="И многое другое..." description={<LinkToSkills />} />
  );
}
