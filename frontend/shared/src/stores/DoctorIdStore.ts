import create from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
	docId: string;
	setDocId: (docId: string) => void;
};

export const doctorIdStore = create<State>(
	persist(
		(set) => ({
			docId: '',
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
