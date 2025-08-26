import { create } from "zustand";
import { DashboardPages } from "./enums";

interface DashboardStore {
  currentPage: DashboardPages;
  setCurrentPage: (page: DashboardPages) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  currentPage: DashboardPages.IN_PROGRESS,
  setCurrentPage: (page: DashboardPages) => set({ currentPage: page }),
}))
