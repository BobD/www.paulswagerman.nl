requirejs.config({
   paths: {
   	 jquery: 'vendors/jquery/jquery.min',
   	 list: 'vendors/list.js/list.min',
   	 underscore: 'vendors/underscore/underscore-min',
   	 domReady: 'modules/helpers/domready',
   	 text: 'modules/helpers/text',
     routes: 'modules/routes',
     section: 'modules/sections/section'
  }
});

require([
	'!domReady',
	'jquery',
	'routes',
	'section',
	'list'
	], function(domReady, $, routes, section, List) {
		$('html').removeClass('no-js').addClass('js');

		section.init({
			$container: $('body')
		});

		routes.init({});

		var options = {
		    valueNames: [ 'name', 'type', 'date' ],
		    listClass: 'projects__list'
		};

		var projects = new List('projects', options);
});