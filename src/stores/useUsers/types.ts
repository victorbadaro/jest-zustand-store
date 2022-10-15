export interface User {
	id: string;
	name: string;
}

export interface UseUsersStore {
	users: User[];
	addUser: (user: User) => void;
	removeUser: (id: string) => void;
}
