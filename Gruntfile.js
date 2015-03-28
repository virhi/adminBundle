module.exports = function(grunt) {

    var ressourcePath = 'src/Virhi/AdminBundle/Resources/';
    var libPath      = ressourcePath + 'lib/';
    var vendorPath   = 'vendor/';
    var adminltePath = vendorPath + 'almasaeed2010/adminlte/';
    var pluginPath   = adminltePath + 'plugins/';
    var node_module  = 'node_module';
    var boostrapPath = node_module + 'bootstrap/';

    // Project configuration.
    grunt.initConfig({

        uglify: {
            options: {
                mangle: false
            },
            dev: {
                files: {
                    'src/Virhi/AdminBundle/Resources/public/js/virhiadmin.js': [
                        pluginPath + 'jQuery/jQuery-2.1.3.min.js',
                        boostrapPath + 'dist/js/bootstrap.js',
                        adminltePath + 'dist/js/app.js',
                        pluginPath + 'input-mask/jquery.inputmask.js',
                        pluginPath + 'input-mask/jquery.inputmask.date.extensions.js',
                        pluginPath + 'input-mask/jquery.inputmask.extensions.js',
                        pluginPath + 'daterangepicker/daterangepicker.js',
                        pluginPath + 'timepicker/bootstrap-timepicker.js',
                    ]
                }
            }
        },
        less: {
            bootstrap: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "src/Virhi/AdminBundle/Resources/public/css/bootstrap.css": ressourcePath + "less/Bootstrap.less"
                }
            },
            adminlte: {
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
                    'src/Virhi/AdminBundle/Resources/public/css/virhiadminstyle.css': [
                        ressourcePath + 'public/css/bootstrap.css',
                        ressourcePath + 'public/css/adminlte.css',
                        pluginPath + 'daterangepicker/daterangepicker-bs3.css',
                        pluginPath + 'timepicker/bootstrap-timepicker.css',
                    ]
                }
            }
        },

        copy: {
            fontawasome: {
                cwd: libPath + 'font-awesome/fonts',  // set working folder / root to copy
                src: '**/*',           // copy all files and subfolders
                dest: ressourcePath + 'public/font/font-awesome',    // destination folder
                expand: true           // required when using cwd
            },
            glyphicons: {
                cwd: boostrapPath + 'fonts',  // set working folder / root to copy
                src: '**/*',           // copy all files and subfolders
                dest: ressourcePath + 'public/font/glyphicons',    // destination folder
                expand: true           // required when using cwd
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
    grunt.registerTask('default', ['css', 'js', 'copy']);

};