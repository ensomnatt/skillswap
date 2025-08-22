import Link from "next/link";
import Button from "@/shared/ui/Button";

type Props = {
  className?: string;
  onClick?: () => void;
}

export default function LoginButton({ className, onClick }: Props) {
  return (
    <Link href="/login">
      <Button label="Войти" className={className} onClick={onClick} />
    </Link>
  );
}
