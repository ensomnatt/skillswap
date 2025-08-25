import { useSkillsStore } from "../../model";

export const useFilteredSkills = () => {
  const { skills, search } = useSkillsStore();

  return skills.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase())
  );
}
