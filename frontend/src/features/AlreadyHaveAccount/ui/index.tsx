import Link from "next/link";

type Props = {
  className?: string;
}

export default function AlreadyHaveAccount({ className }: Props) {
  return (
    <h6 className={`opacity-80 ${className}`}> Уже есть аккаунт? <Link href="/login" className="underline">Войти</Link></h6 >
  );
}
