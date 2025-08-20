import Link from "next/link";
import BlackPlaceholder from "@/shared/ui/BlackPlaceholder";

export default function Logo() {
  return (
    <Link href="/" className="cursor-pointer">
      <BlackPlaceholder className="w-[80] h-[30]" />
    </Link>
  );
}
