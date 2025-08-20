import Link from "next/link";
import Button from "@/shared/ui/Button";

export default function AdminButton() {
  return (
    <Link href="/admin">
      <Button label="Админ-панель" />
    </Link>
  );
}
