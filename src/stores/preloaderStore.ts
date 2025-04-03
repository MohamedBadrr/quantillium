import { create } from "zustand";

interface PreloaderState {
  isPreloaderVisible: boolean;
  setPreloaderVisible: (visible: boolean) => void;
}

export const usePreloaderStore = create<PreloaderState>((set) => ({
  isPreloaderVisible: true, // Initially, preloader is visible
  setPreloaderVisible: (visible) => set({ isPreloaderVisible: visible }),
}));
