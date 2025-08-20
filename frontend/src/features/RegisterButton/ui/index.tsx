import Link from "next/link";
import Button from "@/shared/ui/Button";

export default function RegisterButton() {
  return (
    <Link href="/register">
      <Button label="Регистрация" />
    </Link>
  );
}
