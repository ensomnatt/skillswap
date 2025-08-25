"use client";
import { useFilteredSkills } from "@/entities/Skills";
import Skill from "@/widgets/Skill/ui";

export default function SkillsList() {
  const filteredSkills = useFilteredSkills();
  return (
    <ul className="w-full p-5">
      {filteredSkills.map((skill) => (
        <Skill key={skill.id} name={skill.name} id={skill.id} />
      ))}
    </ul>
  );
}
