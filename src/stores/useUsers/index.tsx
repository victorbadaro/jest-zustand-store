import create from 'zustand';

interface User {
	id: string;
	name: string;
}

interface UseUsersStore {
	users: User[];
	addUser: (user: User) => void;
	removeUser: (id: string) => void;
}

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
