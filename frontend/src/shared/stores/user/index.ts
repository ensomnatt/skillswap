import { create } from "zustand";

interface User {
  email: string;
  nickname: string;
  role: "guest" | "user" | "admin";
  tokens: number;
}

interface UserStore {
  user: User | null;
  isAuth: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isAuth: false,
  login: (user: User) => set({ user, isAuth: true }),
  logout: () => set({ user: null, isAuth: false }),
}));
