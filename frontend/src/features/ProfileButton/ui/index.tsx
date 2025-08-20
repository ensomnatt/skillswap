import Link from "next/link";
import Button from "@/shared/ui/Button";

export default function ProfileButton() {
  return (
    <Link href="/dashboard">
      <Button label="Профиль" />
    </Link>
  );
}
