requirejs.config({
   paths: {
   	 jquery: 'vendors/jquery/jquery.min',
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
	'section'
	], function(domReady, $, routes, section) {
	$('html').removeClass('no-js').addClass('js');

	section.init({
		$container: $('body')
	});

	routes.init({});

});