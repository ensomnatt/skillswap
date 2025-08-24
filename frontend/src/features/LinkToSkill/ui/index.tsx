import Link from "next/link";

type Props = {
  id: number;
}

export default function LinkToSkill({ id }: Props) {
  return (
    <Link href={`/skills/${id}`} className="underline">{">"}</Link>
  );
}
