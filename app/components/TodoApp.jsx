var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({

	getInitialState: function() {
		return {
			showCompletedTodos: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					content: 'Walk the dog',
					isCompleted: false
				}, {
					id: uuid(),
					content: 'Clean the yard',
					isCompleted: true
				}, {
					id: uuid(),
					content: 'Pick up oranges',
					isCompleted: true
				}, {
					id: uuid(),
					content: 'Leave mail on porch',
					isCompleted: false
				}
			]
		}
	},

	onAddTodo: function(content) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					content: content,
					isCompleted: false
				}
			]
		});
	},

	onToggle: function(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.isCompleted = !todo.isCompleted;
			}
			return todo;
		});

		this.setState({
			todos: updatedTodos
		});
	},

	onTodoSearch: function (searchText, showCompletedTodos) {
		this.setState({
			searchText: searchText.toLowerCase(),
			showCompletedTodos: showCompletedTodos
		});
	},

	render: function() {

		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onTodoSearch={this.onTodoSearch} />
				<TodoList todos={todos} onToggle={this.onToggle} />
				<AddTodo onAddTodo={this.onAddTodo}/>
			</div>
		)
	}

});

module.exports = TodoApp;