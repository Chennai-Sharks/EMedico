import create from 'zustand';

type State = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export const useFabStore = create<State>((set) => ({
  visible: true,

  setVisible: (visible) =>
    set((state) => ({
      ...state,
      visible,
    })),
}));
