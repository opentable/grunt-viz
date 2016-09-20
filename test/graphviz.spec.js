'use strict';

const grunt = require('grunt');

exports.graphviz = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  basic: function(test) {
    test.expect(1);

    const actual = grunt.file.read('tmp/schema.svg');
    const expected = grunt.file.read('test/expected/schema.svg');
    test.equal(actual, expected, 'Should output correct GraphViz file');

    test.done();
  }
};
