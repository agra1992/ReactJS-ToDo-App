var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
	render: function() {
		var  {id, content, isCompleted, createdAt, completedAt} = this.props;
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
			<div onClick={() => {
				this.props.onToggle(id);
			}}>
				<input type="checkbox" checked={isCompleted} />
				<p>{content}</p>
				<p>{renderDate()}</p>
			</div>
		);
	}
});

module.exports = Todo;