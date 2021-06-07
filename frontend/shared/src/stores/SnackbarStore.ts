import create from 'zustand';

type State = {
	open: boolean;

	message: string;
	setmessage: (message: string) => void;
	setOpen: (open: boolean) => void;
};

export const snackBarStore = create<State>((set) => ({
	message: '',
	open: false,
	setOpen: (open) =>
		set((state) => ({
			...state,
			open,
		})),
	setmessage: (message) =>
		set((state) => ({
			...state,
			message: message,
		})),
}));
