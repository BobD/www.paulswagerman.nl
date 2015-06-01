/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    connect: {
      desktop: {
        options: {
          base: 'build/desktop',
          keepalive: true,
          open: true
        }
      },
      mobile: {
        options: {
          base: 'build/mobile',
          keepalive: true,
          open: true
        }
      }
    },

    copy: {
      desktop: {
       files: [
          {expand: true, cwd: 'src/desktop/images/', src: ['**/*.*'], dest: 'build/desktop/images', filter: 'isFile'},
          {expand: true, cwd: 'src/desktop/scripts', src: ['**/*.*'], dest: 'build/desktop/scripts', filter: 'isFile'},
          {expand: true, cwd: 'bower_components/jquery/dist/', src: ['jquery.min.*'], dest: 'build/desktop/scripts/vendors/jquery', filter: 'isFile'},
          {expand: true, cwd: 'bower_components/underscore/', src: ['underscore-min.*'], dest: 'build/desktop/scripts/vendors/underscore', filter: 'isFile'},
          {expand: true, cwd: 'bower_components/list.js/dist/', src: ['list.min.*'], dest: 'build/desktop/scripts/vendors/list.js', filter: 'isFile'}
        ]
      },
      mobile: {
       files: [
          {expand: true, cwd: 'src/mobile/images/', src: ['**/*.*'], dest: 'build/mobile/images', filter: 'isFile'},
          {expand: true, cwd: 'src/mobile/scripts', src: ['**/*.*'], dest: 'build/mobile/scripts', filter: 'isFile'},
          {expand: true, cwd: 'bower_components/underscore/', src: ['underscore-min.*'], dest: 'build/mobile/scripts/vendors/underscore', filter: 'isFile'},
          {src: 'bower_components/fastclick/lib/fastclick.js',  dest: 'build/mobile/scripts/vendors/fastclick.js'}
        ]
      },
      dist: {
        files: [
          {expand: true, cwd: 'build/desktop', src: ['**/*.*'], dest: 'dist/desktop', filter: 'isFile'},
          {expand: true, cwd: 'build/mobile', src: ['**/*.*'], dest: 'dist/mobile', filter: 'isFile'}
        ]
      }
    },

    cssmin: {
      desktop: {
        files: {
          'build/desktop/css/style.min.css': ['build/desktop/css/style.css']
        }
      }
    },

    // https://github.com/gruntjs/grunt-contrib-clean
    clean: {
      build: ['build', 'dist']
    },

    // https://github.com/gruntjs/grunt-contrib-sass
    sass: {
      desktop: {
        files: {
          'build/desktop/css/develop.css': 'src/desktop/scss/develop.scss',
          'build/desktop/css/style.css': 'src/desktop/scss/style.scss'
        }
      },
      mobile: {
        files: {
          'build/mobile/css/develop.css': 'src/mobile/scss/develop.scss',
          'build/mobile/css/style.css': 'src/mobile/scss/style.scss'
        }
      }
    },

    // https://github.com/nDmitry/grunt-autoprefixer
    autoprefixer: {
      desktop: {
        expand: true,
        flatten: true,
        src: 'build/desktop/css/*.css',
        dest: 'build/desktop/css/'
      },
      mobile: {
        expand: true,
        flatten: true,
        src: 'build/mobile/css/*.css',
        dest: 'build/mobile/css/'
      },
    },

    // https://github.com/gruntjs/grunt-contrib-requirejs
    requirejs: {
      desktop: {
        options: {
          baseUrl: "build/desktop/scripts",
          mainConfigFile: "build/desktop/scripts/main.js",
          name: "main",
          out: "build/desktop/scripts/main.min.js"
        }
      },
      mobile: {
        options: {
          baseUrl: "build/mobile/scripts",
          mainConfigFile: "build/mobile/scripts/main.js",
          name: "main",
          out: "build/mobile/scripts/main.min.js"
        }
      }
    },

    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      options: {
        livereload: true
      },
      src: {
        files: 'src/**/*.*',
        tasks: ['default']
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['default']
      },
      tasks: {
        files: 'tasks/**/*.js',
        tasks: ['default']
      }
    }

  });

  grunt.task.loadTasks('tasks');

  // https://www.npmjs.org/package/load-grunt-tasks
  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['clean', 'copy:desktop', 'copy:mobile', 'data:desktop', 'data:mobile', 'sass', 'autoprefixer', 'cssmin', 'html:desktop', 'html:mobile', 'copy:dist']);

};
