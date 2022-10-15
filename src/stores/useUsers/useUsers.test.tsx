import { act, renderHook } from '@testing-library/react';
import { useUsersStore } from '.';
import { User } from './types';

const userTest: User = {
	id: '1234',
	name: 'User Test'
};

describe('useUsers', () => {
	it('Should render it with initial values', () => {
		const { result } = renderHook(() => useUsersStore());

		expect(result.current.users.length).toBe(0);
	});

	it('Should add a user after calling the addUser function', () => {
		const { result } = renderHook(() => useUsersStore());

		act(() => {
			result.current.addUser(userTest);
		});

		expect(result.current.users.length).toBe(1);
	});

	it('Should remove a specific user after calling the removeUser function', () => {
		const { result } = renderHook(() => useUsersStore());

		expect(result.current.users.length).toBe(1);

		act(() => {
			result.current.removeUser(userTest.id);
		});

		expect(result.current.users.length).toBe(0);
	});
});
