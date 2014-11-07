module.exports = function (grunt) {
    grunt.initConfig({
        processhtml: {
            dist: {
                files: {
                    'build/_footer.html': ['templates/footer.html'],
                    'build/_header.html': ['templates/header.html'],
                    'build/resume.html': ['templates/index.html'],
                }
            }
        },
        htmlmin: {
            dist: {
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true,
                    //minifyJS: true,
                    //minifyCSS: true
                },
                files: {
                    'build/resume.min.html': ['build/resume.html'],
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-processhtml");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.registerTask('default', ['processhtml', 'htmlmin']);
};