var React = require('react');

var Todo = React.createClass({
	render: function() {
		var  {id, content, isCompleted} = this.props;

		return (
			<div onClick={() => {
				this.props.onToggle(id);
			}}>
				<input type="checkbox" checked={isCompleted} />
				{content}
			</div>
		);
	}
});

module.exports = Todo;