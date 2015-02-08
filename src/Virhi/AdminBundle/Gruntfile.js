module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'Resources/public/js/virhiadmin.js': ['Resources/public/js/jquery-2.1.0.js', 'Resources/public/js/bootstrap.min.js', '../../../../../../almasaeed2010/adminlte/js/app.js']
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "Resources/public/css/virhiadminstyle.css": "Resources/less/Admin.less"
                }
            }
        },
        copy: {
            css: {
                src: 'Resources/public/css/virhiadminstyle.css',
                dest: '../../../../../../web/css/',
                filter: 'isFile',
                expand: true,
                flatten: true
            }
            ,js: {
                src: 'Resources/public/js/virhiadmin.js',
                dest: '../../../../../../web/js/',
                filter: 'isFile',
                expand: true,
                flatten: true
            }/*
            ,font_awesome: {
                src: 'lib/font-awesome-4.2.0/fonts/*',
                dest: 'public/',
                filter: 'isFile',
                expand: true,
                flatten: true
            }
            ,font_awesome: {
                src: 'lib/font-awesome-4.2.0/fonts/*',
                dest: 'public/',
                filter: 'isFile',
                expand: true,
                flatten: true
            }
            ,images: {
                src: 'resources/images/*',
                dest: 'public/',
                filter: 'isFile',
                expand: true,
                flatten: true
            }*/
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['less', 'uglify']);
    grunt.registerTask('install', ['default', 'copy']);

};