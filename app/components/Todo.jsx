var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
	render: function() {
		var  {id, content, isCompleted, createdAt, completedAt} = this.props;
		var todoClassName = isCompleted ? 'todo todo-completed' : 'todo';

		var renderDate = () => {
			var message = "Created on ";
			var timestamp = createdAt;

			if(isCompleted) {
				message = "Completed on ";
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
		};

		return (
			<div className={todoClassName} onClick={() => {
				this.props.onToggle(id);
			}}>
				<div>
					<input type="checkbox" checked={isCompleted} />
				</div>
				<div>
					<p>{content}</p>
					<p className="todo__subtext">{renderDate()}</p>
				</div>
			</div>
		);
	}
});

module.exports = Todo;