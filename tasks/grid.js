module.exports = function(grunt) {
	var _ = require("underscore");
	var Handlebars = require('Handlebars');

	Handlebars.registerHelper('grid', function(grid, block) {
		var projectBlocks = grid.projects;
		var length = parseInt(grid.blocks);
	    var accum = '';
	    var template = Handlebars.compile("<div class='grid__item {{#if w}}w-{{w}}{{/if}} {{#if h}}h-{{h}}{{/if}} {{show}}'><div class='grid__content' {{#if image}} style='background-image:url({{image}})'{{/if}}><div class='grid__header'>{{name}}</div><div class='grid__description'></div></div></div>");
	    var project;

	    for(var i = 1; i <= length; ++i){
	    	project = _.find(projectBlocks, function(p){if(p.block == i){
	    		p.show = 'show';
	    		return p;
	    	}}) || {show: ''};
	        accum += template(project);
	    }

	    return accum;
	});
}
