var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({

	getInitialState: function() {
		return {
			showCompletedTodos: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		}
	},

	componentDidUpdate: function() {
		TodoAPI.setTodos(this.state.todos);
	},

	onAddTodo: function(content) {

		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					content: content,
					isCompleted: false,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			]
		});
	},

	onToggle: function(id) {

		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.isCompleted = !todo.isCompleted;
				todo.completedAt = todo.isCompleted ? moment().unix() : undefined;
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

		var {todos, searchText, showCompletedTodos} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, searchText, showCompletedTodos);

		return (
			<div>
				<TodoSearch onTodoSearch={this.onTodoSearch} />
				<TodoList todos={filteredTodos} onToggle={this.onToggle} />
				<AddTodo onAddTodo={this.onAddTodo}/>
			</div>
		)
	}

});

module.exports = TodoApp;