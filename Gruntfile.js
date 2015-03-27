module.exports = function(grunt) {

    var ressourcePath = 'src/Virhi/AdminBundle/Resources/';
    var vendorPath   = 'vendor/';
    var adminltePath = vendorPath + 'almasaeed2010/adminlte/';
    var boostrapPath = adminltePath + 'bootstrap/';
    var pluginPath   = adminltePath + 'plugins/';

    // Project configuration.
    grunt.initConfig({

        uglify: {
            options: {
                mangle: false
            },
            dev: {
                files: {
                    'src/Virhi/AdminBundle/Resources/public/js/virhiadmin.js': [pluginPath + 'jQuery/jQuery-2.1.3.min.js', boostrapPath + 'js/bootstrap.js', adminltePath + 'dist/js/app.js']
                }
            }
        },
        less: {
            dev: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "src/Virhi/AdminBundle/Resources/public/css/adminlte.css": ressourcePath + "less/Admin.less"
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'src/Virhi/AdminBundle/Resources/public/css/virhiadminstyle.css': [boostrapPath + 'css/bootstrap.css', ressourcePath + 'public/css/adminlte.css']
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('css', ['less', 'cssmin']);
    grunt.registerTask('js', ['uglify']);
    grunt.registerTask('default', ['css', 'js']);

};