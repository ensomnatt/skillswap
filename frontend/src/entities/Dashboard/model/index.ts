import { create } from "zustand";
import { DashboardPageId } from "./enums";

interface DashboardStore {
  currentPage: DashboardPageId;
  setCurrentPage: (id: DashboardPageId) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  currentPage: DashboardPageId.IN_PROGRESS,
  setCurrentPage: (id: DashboardPageId) => set({ currentPage: id }),
}))
