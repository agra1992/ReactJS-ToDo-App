var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

	getInitialState: function() {
		return {
			showCompletedTodos: false,
			searchText: '',
			todos: [
				{
					id: 1,
					content: 'Walk the dog'
				}, {
					id: 2,
					content: 'Clean the yard'
				}, {
					id: 3,
					content: 'Pick up oranges'
				}, {
					id: 4,
					content: 'Leave mail on porch'
				}
			]
		}
	},

	onAddTodo: function(content) {
		console.log('New todo:' + content);
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