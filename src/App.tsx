import { FormEvent, useState } from 'react';
import { useUsersStore } from './stores/useUsers';
import { User } from './stores/useUsers/types';
import './styles/global.css';

export function App() {
	const users = useUsersStore(state => state.users);
	const addUser = useUsersStore(state => state.addUser);
	const removeUser = useUsersStore(state => state.removeUser);
	const [user, setUser] = useState('');

	function handleFormSubmit(event: FormEvent) {
		event.preventDefault();

		const newUser: User = {
			id: crypto.randomUUID(),
			name: user
		};

		addUser(newUser);
		setUser('');
	}

	return (
		<>
			<form onSubmit={handleFormSubmit}>
				<input
					type="text"
					placeholder="user"
					onChange={event => setUser(event.target.value)}
					value={user}
				/>

				<button type="submit">Save</button>
			</form>

			<h1>Users</h1>
			{users.length > 0 ? (
				<ul>
					{users.map(user => (
						<li key={user.id}>
							<span>{user.id} - {user.name}</span>
							<button
								type="button"
								onClick={() => removeUser(user.id)}
							>
								remove
							</button>
						</li>
					))}
				</ul>
			) : (
				<p>There's no users to be shown</p>
			)}
		</>
	);
}
