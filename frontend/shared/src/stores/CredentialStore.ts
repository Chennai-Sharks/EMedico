import create from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  docId: string;
  token: string;
  setToken: (token: string) => void;
  setDocId: (docId: string) => void;
};

export const credentialStore = create<State>(
  persist(
    (set) => ({
      docId: '',
      token: '',
      setToken: (token) =>
        set((state) => ({
          ...state,
          token,
        })),
      setDocId: (docId) =>
        set((state) => ({
          ...state,
          docId: docId,
        })),
    }),

    {
      name: 'docId-store',
    }
  )
);
