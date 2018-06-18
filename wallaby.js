module.exports = wallaby => {
  process.env.NODE_ENV = 'test';
  return {
    files: [
      'src/exercises/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      'test/*.js',
      '!src/__tests__/*.js'
    ],

    tests: [ 'src/__tests__/*.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel()
    },

    hints: {
      ignoreCoverage: /ignore coverage/ // or /istanbul ignore next/, or any RegExp
    },

    testFramework: 'jest'
  };
};
