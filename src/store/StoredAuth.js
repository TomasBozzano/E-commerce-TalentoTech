import { create } from "zustand";

export const StoredAuth = create((set) => ({
    isAuthenticated: false,
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    reset: () => set({ email: "", password: "" }),
}));