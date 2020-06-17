const path = require('path');


module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'WrapperTheme.js',
    library: 'WrapperTheme',
    libraryTarget: 'amd'
  },
  externals: [
    {
      react:  'react'
    },
    {
      'prop-types': 'prop-types'
    },
    {
      'react-dom': 'reactDOM'
    },
    /^@material-ui\/.+$/i
  ], resolve: {
    extensions: [ '.js', '.jsx']
  }
};
