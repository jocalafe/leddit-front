import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body'
});

export default {
  entry: [
    path.join(__dirname, '/src/js/index.jsx'),
    path.join(__dirname, '/src/scss/index.scss')
  ],
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: 'src/',
    hot: true,
    inline: true,
    port: 3000,
    host: 'localhost',
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.jsx'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    HtmlWebpackPluginConfig,
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('index.css')
  ]
};
