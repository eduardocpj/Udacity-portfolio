module.exports = function (grunt){

  "use strict";

  var config;

  config = {

    responsive_images: {
      myTask: {
        options: {
          sizes: [{
            name: 'large',
            width: 640
          },{
            name: "large",
            width: 1024,
            suffix: "x2",
            quality: 60
          },{
            name: "large",
            width: 1500,
            suffix: "x3",
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['**.{jpg,gif,png}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },
  }

  //init grunt
  grunt.initConfig(config);

  //load tasks
  grunt.loadNpmTasks('grunt-responsive-images');
  //register tags
  grunt.registerTask('portfolio',[]);

  //grunt.registerTask('padrao',['padrao']);
  grunt.registerTask('portfolio',['responsive_images']);
};
