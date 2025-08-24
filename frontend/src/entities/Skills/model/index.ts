import { create } from "zustand";
import { Skill } from "./types";
import { fetch } from "../api";

interface SkillsStore {
  skills: Skill[];
  search: string;
  setSearch: (value: string) => void;
  fetchSkills: () => Promise<void>;
}

export const useSkillsStore = create<SkillsStore>((set) => ({
  skills: [],
  search: "",
  setSearch: (value: string) => set({ search: value }),
  fetchSkills: async () => {
    try {
      const skills = await fetch();
      set({ skills: skills });
    } catch (err) {
      throw new Error(`ошибка при получении навыков с сервера: ${err}`);
    }
  }
}));
