import create from 'zustand';
import { UseUsersStore } from './types';

export const useUsersStore = create<UseUsersStore>((set, get) => ({
	users: [],

	addUser(user) {
		set({
			users: [ ...get().users, user ]
		});
	},

	removeUser(id) {
		const filteredUsers = get().users.filter(user => user.id !== id);

		set({
			users: filteredUsers
		});
	},
}));
