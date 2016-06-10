var React = require('react');

var AddTodo = React.createClass({

	submitNewTodo: function(event) {
		event.preventDefault();

		var todoText = this.refs.todoText.value;

		if(todoText !== '' && todoText.length > 0) {
			this.props.onAddTodo(todoText);
			this.refs.todoText.value = '';
		} else {
			this.refs.todoText.focus();
		}
	},

	render: function() {
		return (
			<div className="container__footer">
				<form onSubmit={this.submitNewTodo}>
					<input type="text" placeholder="Enter your new todo item..." ref="todoText" />
					<button className="button expanded">Create</button>
				</form>
			</div>
		);
	}
});

module.exports = AddTodo;