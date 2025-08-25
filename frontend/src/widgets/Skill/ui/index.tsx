import LinkToSkill from "@/features/LinkToSkill";

type Props = {
  name: string;
  id: number;
}

export default function Skill({ name, id }: Props) {
  return (
    <li className="w-full flex justify-between items-center py-2">
      <h1 className="text-lg">{name}</h1>
      <LinkToSkill id={id} />
    </li>
  )
}
