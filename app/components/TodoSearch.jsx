var React = require('react');

var TodoSearch = React.createClass({

	handleTodoSearchInput: function() {
		var showCompletedTodos = this.refs.showCompletedTodos.checked;
		var serachText = this.refs.searchTodo.value;

		this.props.onTodoSearch(serachText, showCompletedTodos);
	},

	render: function() {
		return (
			<div>
				<div>
					<input type="search" ref="searchTodo" placeholder="Enter ToDo to search..." onChange={this.handleTodoSearchInput} />
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompletedTodos" onChange={this.handleTodoSearchInput} />
						Show completed tasks
					</label>
				</div>
			</div>
		);
	}
});

module.exports = TodoSearch;