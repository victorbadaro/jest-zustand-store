import { render, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';
import { useUsersStore } from './stores/useUsers';
import { UseUsersStore } from './stores/useUsers/types';

interface Result<Store> {
	current: Store;
}

let result: Result<UseUsersStore>;


beforeEach(() => {
	const renderHookResult = renderHook(() => useUsersStore());

	result = renderHookResult.result;
});

describe('<App />', () => {
	it('Should render it', () => {
		const { container } = render(<App />);

		expect(container).toBeInTheDocument();
	});

	it('Should create a new user after filling and submitting the form', async () => {
		const spy = jest.spyOn(result.current, 'addUser');
		const { container } = render(<App />);
		const form = container.querySelector('form') as HTMLElement;
		const input = form.querySelector('input') as HTMLInputElement;
		const submitButton = form.querySelector('button') as HTMLButtonElement;

		await userEvent.type(input, 'User Test');
		await userEvent.click(submitButton);

		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('Should remove a specific user after clicking on remove user button in the list', async ()=> {
		const spy = jest.spyOn(result.current, 'removeUser');
		const { container } = render(<App />);

		const removeButton = container.querySelector('ul button') as HTMLButtonElement;

		await userEvent.click(removeButton);

		expect(spy).toHaveBeenCalledTimes(1);
	});
});
