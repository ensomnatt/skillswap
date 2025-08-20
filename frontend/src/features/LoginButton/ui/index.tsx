import Link from "next/link";
import Button from "@/shared/ui/Button";

export default function LoginButton() {
  return (
    <Link href="/login">
      <Button label="Войти" />
    </Link>
  );
}
