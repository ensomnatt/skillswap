import { fetch } from "../../api"
import { useSkillsStore } from "../../model";
import { useCallback } from "react";

export const useFetchSkills = () => {
  const { setSkills } = useSkillsStore();

  const fetchSkills = useCallback(async () => {
    try {
      const skills = await fetch();
      setSkills(skills);
    } catch (err) {
      console.error(`ошибка при получении навыков с сервера: ${err}`);
    }
  }, [setSkills])

  return { fetchSkills };
}
