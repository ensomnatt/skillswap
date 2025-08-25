import Link from "next/link";
import Button from "@/shared/ui/Button";

export default function SkillsButton() {
  return (
    <Link href="/skills">
      <Button label="Навыки" />
    </Link>
  );
}
