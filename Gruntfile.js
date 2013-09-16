module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	  
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    
    karma: {
		unit: {
			configFile: 'config/karma_jenkins.conf.js'
		},
		e2e: {
			configFile: 'config/karma-e2e_jenkins.conf.js'
		}
	},
    
    clean: {
		dist: {
			files: [{
				dot: true,
				src: [
					'.tmp',
					'<%= yeoman.dist %>/*',
					'!<%= yeoman.dist %>/.git*'
					]}]
				},
		test: {
			files: [{src: ['target']}]
			}
		}
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  
  grunt.registerTask('test',
   'clean:test',
   'karma:unit'
  );

  grunt.registerTask('test_e2e',
   'clean:test',
   'karma:e2e'
  );
};
