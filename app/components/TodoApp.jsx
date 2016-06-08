var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({

	getInitialState: function() {
		return {
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

	render: function() {

		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos} />
			</div>
		)
	}

});

module.exports = TodoApp;