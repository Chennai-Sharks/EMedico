import create from 'zustand';

type State = {
  mongoId: string;
  name: string;
  dpid: string;

  setDpid: (dpid: string) => void;

  setMongoId: (mongoId: string) => void;
  setName: (name: string) => void;
};

export const getPatientStore = create<State>((set) => ({
  mongoId: '',
  name: '',
  dpid: '',
  setDpid: (dpid) =>
    set((state) => ({
      ...state,
      dpid,
    })),
  setName: (name) =>
    set((state) => ({
      ...state,
      name,
    })),
  setMongoId: (mongoId) =>
    set((state) => ({
      ...state,
      mongoId,
    })),
}));
