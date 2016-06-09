var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

	beforeEach(() => {
		localStorage.removeItem('todos');
	});

	it('should exist', () => {
		expect(TodoAPI).toExist();
	});

	describe('setTodos', () => {
		it('should set valid todos array', () => {
			var todos = [{
				id: 1,
				content: 'test data',
				isCompleted: false
			}];

			TodoAPI.setTodos(todos);
			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(todos);
		});

		it('should not set invalid todos array', () => {
			var badTodos = {a: 'b'};

			TodoAPI.setTodos(badTodos);

			expect(localStorage.getItem('badTodos')).toBe(null);
		});
	});

	describe('getTodos', () => {
		it('should return empty array for bad localStorage data', () => {
			var actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual([]);
		});

		it('should return todos for valid localStorage data', () => {
			var todos = [{
				id: 1,
				content: 'test data',
				isCompleted: false
			}];
			localStorage.setItem('todos', JSON.stringify(todos));
			var actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual(todos);
		});
	});

	describe('filterTodos', () => {
		var todos = [
			{
				id: 1,
				content: 'test data 1',
				isCompleted: false
			}, {
				id: 2,
				content: 'test data 2',
				isCompleted: true
			}, {
				id: 3,
				content: 'test data 3',
				isCompleted: true
			}, {
				id: 4,
				content: 'test data 4',
				isCompleted: false
			}
		];

		it('should return all items if show completed is true', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, '', true);
			expect(filteredTodos.length).toBe(todos.length);
		});

		it('should return items with isCompleted as false if show completed is false', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, '', false);
			expect(filteredTodos.length).toBe(2);
		});
	});
});