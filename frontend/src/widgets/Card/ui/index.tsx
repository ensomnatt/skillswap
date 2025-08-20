import { CardType as Props } from "@/shared/types/Card";

export default function Card({ title, description }: Props) {
  return (
    <div className="w-[230] h-[250] flex flex-col justify-center items-center border border-black rounded-[30] p-5">
      <h1 className="text-xl font-bold">{title}</h1>
      <h4 className="mt-[10] text-base">{description}</h4>
    </div>
  );
}
