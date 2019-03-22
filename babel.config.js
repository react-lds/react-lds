module.exports = {
  presets: ['@babel/react', ['@babel/env', {
    modules: false,
    useBuiltIns: 'usage',
    corejs: '2'
  }]],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties'
  ],
  env: {
    test: {
      presets: ['@babel/env'],
      plugins: ['@babel/plugin-transform-modules-commonjs']
    },
    docs: {
      presets: [
        ['@babel/env', {
          targets: {
            uglify: true
          }
        }]
      ],
    },
    commonjs: {
      presets: [
        ['@babel/env', {
          targets: {
            browsers: ['last 2 versions']
          },
          modules: 'commonjs',
          useBuiltIns: false
        }]
      ],
      plugins: [
        ['transform-react-remove-prop-types', {
          mode: 'wrap',
          ignoreFilenames: ['node_modules']
        }]]
    },
    es: {
      plugins: [
        ['transform-react-remove-prop-types', {
          mode: 'wrap',
          ignoreFilenames: ['node_modules']
        }]]
    }
  }
};
