
module.exports = function (grunt) {
	pkg:grunt.file.readJSON("package.json"),

grunt.initConfig({
	watch:{
			w1:{
				 files:['ui/**/*.js','ui/**/*.html'],
				 tasks:['copy']
			}
	},
	sass: {
		options: {
			sourceMap: true
		},
		dist: {
			files: {
				'css/main.css': 'scss/main.scss'
			}
		}
	},
	
	
	copy: {
	  main: {
	    files: [
	      // includes files within path
	      {expand: true, cwd: 'ui/app/',src: ['**/*.js'], dest: 'dist/scripts/'},
	      {expand: true, cwd: 'ui/html/', src: ['**'], dest: 'dist/'},  
	      {expand:true, cwd:'node_modules/jquery/dist/', src:["jquery*.js"], dest:'dist/scripts/vendor/jquery/3.3.1/'},
	      {expand:true, cwd:'node_modules/bootstrap/dist/js/', src:["bootstrap*.js"], dest:'dist/scripts/vendor/bootstrap/4.0.0/'},
	      {expand:true, cwd:'node_modules/bootstrap/dist/css/', src:["bootstrap*.css"], dest:'dist/css/vendor/bootstrap/4.0.0/'},
	      {expand: true, cwd: 'ui/styles/css/', src: ['**/*.css'], dest: 'dist/css/'},
	     
	      ]
	  	}
	}
});
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['copy']);
}