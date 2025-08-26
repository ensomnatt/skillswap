import { User } from "./types";
import { createPersistedStore } from "@/shared/helpers/createPersistedStore";

interface UserStore {
  user: User | null;
  isAuth: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useUserStore = createPersistedStore<UserStore>(
  "user-storage",
  (set) => ({
    user: null,
    isAuth: false,
    login: (user: User) => set({ user, isAuth: true }),
    logout: () => set({ user: null, isAuth: false }),
  })
);
