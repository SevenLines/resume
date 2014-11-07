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
        }
    });

    grunt.loadNpmTasks("grunt-processhtml");
    grunt.registerTask('default', ['processhtml']);
};