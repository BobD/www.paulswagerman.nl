module.exports = function(grunt) {
	var _ = require("underscore");
	var Handlebars = require('Handlebars');
	var path  = require('path');
	var buildPath = 'build/';

	grunt.registerTask('html', 'Compiles the Handlebar templates', function(target) {
		var pages = grunt.file.expand('src/' + target + '/html/*.html');
		var partials = grunt.file.expand({cwd: 'src/' + target + '/html/templates/'}, '**/*.hbs');
		var data = grunt.option('data')[target];
		var partialName, partialHTML, dir, dir;

		_.each(partials, function(file){
			dir = path.dirname(file);

			if(dir == '.'){
				dir = '';
			}else{
				dir += '/';
			}

			partialName = path.basename(file, '.hbs');
			partialHTML = grunt.file.read('src/' + target + '/html/templates/' + file);

			Handlebars.registerPartial(dir + partialName, partialHTML);
		});

		_.each(pages, function(file){
			compilePage(file);
		});

		function compilePage(file){
			var html = grunt.file.read(file);
			var name = path.basename(file, '.html');
			var template = Handlebars.compile(html);
			var html = template(data);

			grunt.file.write(buildPath + '/' + target + '/' +  name + '.html', html);
		}

	});

}