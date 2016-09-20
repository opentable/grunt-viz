/*
 * grunt-viz
 * https://github.com/opentable/grunt-viz
 *
 * Copyright (c) 2016 Matt Blair
 * Licensed under the MIT license.
 */
'use strict';

const Viz = require('viz.js');
const path = require('path');

const FORMATS = ['svg', 'xdot', 'plain', 'ps'];

module.exports = function(grunt) {
  grunt.registerMultiTask('viz', 'Compile graphviz files', function() {
    const options = this.options();
    grunt.verbose.writeflags(options, 'Options');

    this.files.forEach(function(file) {
      const src = file.src[0];
      const dest = file.dest;
      const format = path.extname(dest).substr(1).toLowerCase();

      if (FORMATS.indexOf(format) === -1) {
        grunt.log.error('Error: format "' + format + '" not recognized. Use one of: ' + FORMATS.join(' '));

        if (!grunt.option('force')) {
          return false;
        }
      }

      grunt.file.mkdir(path.dirname(dest));

      if (dest !== src && grunt.file.exists(dest)) {
        grunt.file.delete(dest);
      }

      const fileSrc = grunt.file.read(src);
      const output = Viz(fileSrc, {format: format});
      grunt.file.write(dest, output);
      grunt.log.writeln("Compiled " + (src).cyan + ' -> ' + (dest).cyan);
    });
  });
};
