"use client";

import { useSkillsStore } from "@/entities/Skills";
import Input from "@/shared/ui/Input";

export default function SkillsSearch() {
  const { search, setSearch } = useSkillsStore();
  return (
    <div className="border-b border-black h-12 w-full flex justify-center items-center">
      <Input
        type="text"
        placeholder="Поиск навыков"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-none focus:outline-none focus:ring-0"
      />
    </div>
  );
}
