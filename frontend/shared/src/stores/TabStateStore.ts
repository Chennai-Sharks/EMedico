import create from 'zustand';

type State = {
  value: number;
  setvalue: (value: number) => void;
};
// central state for tab navigation

export const tabStateStore = create<State>((set) => ({
  value: 0,

  setvalue: (value) =>
    set((state) => ({
      ...state,
      value: value,
    })),
}));
