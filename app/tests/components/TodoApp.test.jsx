var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should add Todo to the todos state on onAddTodo', () => {
		var todoText = "test text";
		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({
			todos: []
		});
		todoApp.onAddTodo(todoText);
		expect(todoApp.state.todos[0].content).toBe(todoText);
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	});

	it('should toggle completed value when onToggle called', () => {
		var todoData = {
			id: 11,
			content: 'test',
			isCompleted: false,
			createdAt: 0,
			completedAt: undefined
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

		todoApp.setState({
			todos: [todoData]
		});

		expect(todoApp.state.todos[0].content).toBe(todoData.content);
		expect(todoApp.state.todos[0].isCompleted).toBe(false);

		todoApp.onToggle(11);

		expect(todoApp.state.todos[0].isCompleted).toBe(true);
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	});

	it('should toggle todo from complete to incomplete', () => {
		var todoData = {
			id: 11,
			content: 'test',
			isCompleted: true,
			createdAt: 0,
			completedAt: 123
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

		todoApp.setState({
			todos: [todoData]
		});

		expect(todoApp.state.todos[0].content).toBe(todoData.content);
		expect(todoApp.state.todos[0].isCompleted).toBe(true);

		todoApp.onToggle(11);

		expect(todoApp.state.todos[0].isCompleted).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toNotExist();
	});
});