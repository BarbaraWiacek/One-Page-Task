module.exports = function (grunt) {
	
	const sass = require('node-sass');
	//project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package-lock.json'),
		sass_globbing: {
			your_target: {
				files: {
					'css/scss/main.scss': 'css/scss/**/*.scss'
				},
				options: {
					useSingleQuotes: false,
					signature: ''
				}
			}
		},
		sass: {
			options: {
				implementation: sass,
				sourceMap: false
			},
			dist: {
				files: {
					'css/style.css': 'css/scss/main.scss'
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css',
					src: ['style.css', '!*.min.css'],
					dest: 'css',
					ext: '.min.css'
				}]
			}
		},
		watch: {
			styles: {
				files: ['css/**/*.scss'],
				tasks: ['sass_globbing', 'sass', 'cssmin']
			}
		}
	});
	grunt.loadNpmTasks('grunt-sass-globbing');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin')


	//Default tasks
	grunt.registerTask('dev', [
		'sass_globbing',
		'sass',
		'cssmin',
		'watch'
	]);
	grunt.registerTask('styles', ['sass_globbing', 'sass']);
};