module.exports = function (grunt) {
	
	const sass = require('node-sass');
	//project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package-lock.json'),
		sass_globbing: {
			your_target: {
				files: {
					'css/main.scss': 'css/scss/**/*.scss'
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
				sourceMap: false,
				outputStyle: 'compact'
			},
			dist: {
				files: {
					'dist/style.css': 'css/main.scss'
				}
			}
		},
		autoprefixer:{
			dist:{
				files:{
					'dist/style.css':'dist/style.css'
				}
			}
		},
		babel: {
			options: {
				sourceMap: true,
				presets: ['@babel/preset-env']
			},
			dist: {
				files: {
					'dist/app.js': 'js/script.js'
				}
			}
		},
		watch: {
			styles: {
				files: ['css/**/*.scss'],
				tasks: ['sass_globbing', 'sass', 'autoprefixer']
			},
			scripts: {
				files: ['js/*.js'],
				tasks: ['babel']
			}
		}
	});
	grunt.loadNpmTasks('grunt-sass-globbing');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-babel');


	//Default tasks
	grunt.registerTask('dev', [
		'sass_globbing',
		'sass',
		'autoprefixer',
		'babel',
		'watch'
	]);
	grunt.registerTask('styles', ['sass_globbing', 'sass', 'autoprefixer']);
};