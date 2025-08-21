import Link from "next/link";
import Button from "@/shared/ui/Button";

type Props = {
  label: string;
  className?: string;
  onClick?: () => void;
}

export default function RegisterButton({ label, className, onClick }: Props) {
  return (
    <Link href="/register">
      <Button label={label} className={className} onClick={onClick} />
    </Link>
  );
}
