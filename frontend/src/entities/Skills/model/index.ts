import { create } from "zustand";
import { Skill } from "./types";

interface SkillsStore {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
  search: string;
  setSearch: (value: string) => void;
}

export const useSkillsStore = create<SkillsStore>((set) => ({
  skills: [],
  setSkills: (skills: Skill[]) => set({ skills: skills }),
  search: "",
  setSearch: (value: string) => set({ search: value }),
}));
