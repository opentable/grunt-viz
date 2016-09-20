# grunt-viz

> Compile DOT files

## Dependencies

None. This uses a js library called viz.js to render the graphviz files.

Please note that this library is limited in which formats it can render.

If you need to render a format this library does not support, please check out grunt-graphviz

### Install

## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-viz --save-dev
```

OSX
```shell
brew install viz
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-viz');
```

## The "viz" task

### Overview
In your project's Gruntfile, add a section named `viz` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  viz: {
    your_target: {
      files: {
        'dest/file.png': 'source/file.dot',
        // etc...
      }
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
