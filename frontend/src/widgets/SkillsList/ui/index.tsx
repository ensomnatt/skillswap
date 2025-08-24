"use client";
import { useSkillsStore } from "@/entities/Skills"
import Skill from "@/widgets/Skill/ui";

export default function SkillsList() {
  const { skills, search } = useSkillsStore();

  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul className="w-full p-5">
      {filteredSkills.map((skill) => (
        <Skill key={skill.id} name={skill.name} id={skill.id} />
      ))}
    </ul>
  );
}
