module.exports = function(grunt) {
	var Handlebars = require('Handlebars');

	Handlebars.registerHelper('menu_active', function(a, b) {
		return (a == b) ? 'active' : '';
	});
}
