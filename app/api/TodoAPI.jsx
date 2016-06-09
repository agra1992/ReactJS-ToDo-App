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
		if(searchText.length > 0) {
			filteredTodos = filteredTodos.filter((todo) => {
				var lcSearchText = todo.content.toLowerCase();
				return lcSearchText.search(searchText) >= 0 ? true : false;
			});
		}

		// Sort todos with non-completed first
		filteredTodos.sort((a, b) => {
			if(!a.isCompleted && b.isCompleted)
				return -1;
			else if(a.isCompleted && !b.isCompleted)
				return 1;
			else 
				return 0;
		});

		return filteredTodos;
	}
};