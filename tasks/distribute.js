module.exports = function(grunt) {
	var config = grunt.file.readJSON('config.json');
	var localPath = config.distribute.local;

	grunt.registerTask('distribute', 'Copy the production files to the proper location for further testing', function(target) {

		grunt.config('copy.distribute.files', [
			{expand: true, cwd: 'dist/' + target , src: ['**/*.*'], dest: localPath, filter: 'isFile'},
		]);

		grunt.task.run(['default', 'requirejs', 'copy:distribute']);
	});

}