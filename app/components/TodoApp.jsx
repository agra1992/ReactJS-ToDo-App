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
					content: 'Walk the dog'
				}, {
					id: uuid(),
					content: 'Clean the yard'
				}, {
					id: uuid(),
					content: 'Pick up oranges'
				}, {
					id: uuid(),
					content: 'Leave mail on porch'
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
					content: content
				}
			]
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
				<TodoList todos={todos} />
				<AddTodo onAddTodo={this.onAddTodo}/>
			</div>
		)
	}

});

module.exports = TodoApp;