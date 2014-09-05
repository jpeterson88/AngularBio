module.exports = function(grunt) {
	  grunt.initConfig({
    gruntfile: {
      src: 'Gruntfile.js'
    },
    bower_concat: {
      all: {
        dest: 'static/lib.js',
        bowerOptions: {
          relative: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.registerTask('default', ['bower_concat']);
};