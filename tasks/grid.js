module.exports = function(grunt) {
	var _ = require("underscore");
	var Handlebars = require('Handlebars');

	Handlebars.registerHelper('grid', function(grid, block) {
		var projectBlocks = grid.projects;
		var length = parseInt(grid.blocks);
	    var template = Handlebars.compile("<div class='box__item {{#if w}}w-{{w}}{{/if}} {{#if h}}h-{{h}}{{/if}} {{show}}'><a href='' class='box__content' {{#if image}} style='background-image:url({{image}})'{{/if}}><div class='box__header'>{{name}}</div><div class='box__description'>{{description}}</div></a></div>");
	   	var accum = '';
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
