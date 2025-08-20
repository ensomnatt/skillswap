import Link from "next/link";
import { FooterLinkType as Props } from "@/shared/types/FooterLink";

export default function FooterLink({ label, href }: Props) {
  return (
    <Link className="text-base text-white text-lg opacity-80" href={href}>{label}</Link>
  );
}
