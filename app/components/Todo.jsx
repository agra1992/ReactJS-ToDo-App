var React = require('react');

var Todo = React.createClass({
	render: function() {
		var  {id, content} = this.props;

		return (
			<li>
				<h3><span>{id}: </span>{content}</h3>
			</li>
		);
	}
});

module.exports = Todo;