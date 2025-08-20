import Link from "next/link";

type Props = {
  label: string;
  href: string;
}

export default function FooterLink({ label, href }: Props) {
  return (
    <Link className="text-base text-white text-lg opacity-80" href={href}>{label}</Link>
  );
}
