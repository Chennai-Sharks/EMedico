import create from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  name: string;
  profileUrl: string;
  email: string;

  setName: (name: string) => void;
  setProfileUrl: (url: string) => void;
  setEmail: (email: string) => void;
};

export const docDetailsStore = create<State>(
  persist(
    (set) => ({
      name: '',
      profileUrl: '',
      email: '',
      setName: (name) =>
        set((state) => ({
          ...state,
          name,
        })),
      setProfileUrl: (profileUrl) =>
        set((state) => ({
          ...state,
          profileUrl,
        })),
      setEmail: (email) =>
        set((state) => ({
          ...state,
          email,
        })),
    }),

    {
      name: 'doc-details-Store',
    }
  )
);
