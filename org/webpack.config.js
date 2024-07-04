const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { join } = require('path');
//added myself
const webpack = require('webpack');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev,next)=>{
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
},{});

module.exports = {
  output: {
    path: join(__dirname, './dist/org'),
    publicPath: '/'
  },
  devServer: {
    port: 4200,
    historyApiFallback: true,
  },
  resolve:  {
    plugins: [new TsconfigPathsPlugin({    
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    })],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys), //added myself
    new NxAppWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/main.tsx',
      index: './src/index.html',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: ['./src/styles.css'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
  ],
};