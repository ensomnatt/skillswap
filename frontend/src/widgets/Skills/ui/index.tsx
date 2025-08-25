"use client";

import { useFetchSkills } from "@/entities/Skills";
import SkillsList from "@/widgets/SkillsList";
import SkillsSearch from "@/widgets/SkillsSearch";
import { useEffect } from "react";

export default function Skills() {
  const { fetchSkills } = useFetchSkills();

  useEffect(() => {
    fetchSkills();
  }, [])

  return (
    <div className="flex flex-col justify-center items-center border border-black py-3 my-20">
      <SkillsSearch />
      <SkillsList />
    </div>
  );
}
