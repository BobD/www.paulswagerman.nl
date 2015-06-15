# www.paulswagerman.nl prototyping environment
A little grunt.js environment to start scaffolding cool new projects. 

The main aim of this prototyping environment is to implement a design quick and easy, and while doing so produce CSS and Javascript files ready for use in a production environment.

# Project

www.paulswagerman.nl

# Author

Bob Donderwinkel, bd creations

# Features

* SMACCS file structure
* SASS, CSS autprefixing and minifying
* Handlebars templating
* RequireJS scripting
* build and distribution folders
* separate desktop and mobile assets and output

# Installation

1. Install Node.js: https://nodejs.org/
2. Install Grunt: http://gruntjs.com/getting-started#installing-the-cli
3. Install SASS: Run this in your terminal 'gem install sass', or check here http://sass-lang.com/install
4. Install bower: http://bower.io/#install-bower

Then, go to the project root folder in your terminal and run these commands 

1. npm install
2. bower install
3. grunt connect

The after each change you make in any file in the src folder, just run 'grunt' in your terminal and refresh your browser.

Or better yet, use Livereload (http://livereload.com/) and run 'grunt watch' in your terminal. Then every filechange will refresh the browser.


# To come

* development/production dependent CSS, Javascript and HTML output
* shared variables and settings between desktop and mobile
* Live style guide
* loads..


# Changelog


# License