"use client";

import { create } from "zustand";

type NewsAppState = {
  posts: Array<Meta>;
};

type AdminAction = {
  setPosts: (p: Array<Meta>) => void;
};

const defaultStore: NewsAppState = {
  posts: [],
};

export const useNewsAppStore = create<NewsAppState & AdminAction>()(
  (set, get) => ({
    ...defaultStore,
    setPosts: (p: Array<Meta>) => {
      set({ posts: p });
    },
  })
);
