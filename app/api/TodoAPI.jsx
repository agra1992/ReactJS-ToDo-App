var $ = require('jquery');

module.exports = {

	setTodos: function(todos) {
		if($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		} else {
			localStorage.setItem('todos', []);
		}
	},

	getTodos: function() {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(stringTodos);
		} catch(err) {
			console.log('JSON parse failed');
		}

		return $.isArray(todos) ? todos : [];
	},

	filterTodos: function(todos, searchText, showCompletedTodos) {
		var filteredTodos = todos;

		// Filter by show completed
		filteredTodos = filteredTodos.filter((todo) => {
			return !todo.isCompleted || showCompletedTodos;
		});

		// Filter by search text

		// Sort todos with non-completed first

		return filteredTodos;
	}
};