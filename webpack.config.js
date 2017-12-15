const path = require('path');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src/html/'),
  JS: path.resolve(__dirname, 'src/js/'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'main.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['url-loader']
      }
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};