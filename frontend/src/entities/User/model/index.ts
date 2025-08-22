import { create } from "zustand";
import { User } from "./types";
import { persist } from "zustand/middleware";

interface UserStore {
  user: User | null;
  isAuth: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isAuth: false,
      login: (user: User) => set({ user, isAuth: true }),
      logout: () => set({ user: null, isAuth: false }),
    }),
    {
      name: "user-storage",
    }
  )
);
