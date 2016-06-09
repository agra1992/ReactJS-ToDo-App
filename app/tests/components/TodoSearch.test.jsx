var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should call handleTodoSearchInput with entered input text', () => {
		var searchText = 'Dog';
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onTodoSearch={spy} />);
		todoSearch.refs.searchTodo.value = searchText;

		TestUtils.Simulate.change(todoSearch.refs.searchTodo);

		expect(spy).toHaveBeenCalledWith('Dog', false);
	});

	it('should call handleTodoSearchInput with checked value', () => {

		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onTodoSearch={spy} />);
		
		todoSearch.refs.showCompletedTodos.checked = true;
		
		TestUtils.Simulate.change(todoSearch.refs.showCompletedTodos);

		expect(spy).toHaveBeenCalledWith('', true);
	});
});