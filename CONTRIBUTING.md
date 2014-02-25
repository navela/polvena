# Contributing

Fork the repo at https://github.com/polvena/polvena

Avoid unnamed functions and follow the other modules structure. By only using named functions it will be easier to extract the code from the AMD module if needed and it will also give better error messages, JavaScript minifiers like [Google Closure Compiler](http://code.google.com/closure/compiler/) and [UglifyJS](https://github.com/mishoo/UglifyJS) will make sure code is as small/optimized as possible.


## Tests & Code Coverage ##

Be sure to always create tests for each proposed module. Features will only be merged if they contain proper tests and documentation. Tests can be found inside the `tests` folder, to execute them in the browser open the `tests/runner.html`. The same tests also work on node.js by running `npm test`.


## Admins / Pull Requests ##

Even if you are an admin (have commit rights) please do pull requests when adding new features or changing current behavior, that way we can review the work and discuss. Feel free to push changes that doesn't affect behavior without asking for a pull request (readme, changelog, build script, typos, refactoring, ...).

