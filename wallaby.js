module.exports = function (wallaby) {
  process.env.NODE_PATH += `:${require('path').join(wallaby.localProjectDir, 'node_modules')}`;

  return {
    files: [
      'src/**/*.js',
      { pattern: '!src/**/*.spec.js', instrument: false },
    ],
    tests: [
      'src/**/*.spec.js',
    ],
    env: {
      type: 'node',
      params: {
        env: 'SRC_PATH=./src;NODE_ENV=test',
      }
    },
    testFramework: 'jest',
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babelrc: true
      })
    },
    delays: {
      run: 1500,
    },
    slowTestThreshold: 1000
  };
};
