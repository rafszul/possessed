module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        svgcombine: {
            files: {
                'svg-cache.html': ['svg/*.svg'],
            },
            },
        });

        grunt.loadNpmTasks('grunt-svg-combine');










/*    Common svg-sprite config options and their default values

    var config                  = {
    dest                    : '.',                      // Main output directory
    log                     : null,                     // Logging verbosity (default: no logging)
    shape                   : {                         // SVG shape related options
    id                  : {                         // SVG shape ID related options
    separator       : '--',                     // Separator for directory name traversal
    generator       : function() { /*... },   // SVG shape ID generator callback
                 pseudo          : '~'                       // File name separator for shape states (e.g. ':hover')
                 },
                 dimension           : {                         // Dimension related options
                 maxWidth        : 2000,                     // Max. shape width
                 maxHeight       : 2000,                     // Max. shape height
                 precision       : 2,                        // Floating point precision
                 attributes      : false,                    // Width and height attributes on embedded shapes
                 },
                 spacing             : {                         // Spacing related options
                 padding         : 0,                        // Padding around all shapes
                 box             : 'content'                 // Padding strategy (similar to CSS `box-sizing`)
                 },
                 meta                : null,                     // Path to YAML file with meta / accessibility data
                 align               : null,                     // Path to YAML file with extended alignment data
                 dest                : null                      // Output directory for optimized intermediate SVG shapes
                 },
                 transform               : ['svgo'],                 // List of transformations / optimizations
                 svg                     : {                         // General options for created SVG files
                 xmlDeclaration      : true,                     // Add XML declaration to SVG sprite
                 doctypeDeclaration  : true,                     // Add DOCTYPE declaration to SVG sprite
                 namespaceIDs        : true,                     // Add namespace token to all IDs in SVG shapes
                 dimensionAttributes : true                      // Width and height attributes on the sprite
                 },
                 variables               : {}                        // Custom Mustache templating variables and functions
                 }
*/
