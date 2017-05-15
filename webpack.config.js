const webpack = require('webpack'),
	path = require("path"),
	PrepackWebpackPlugin = require('prepack-webpack-plugin').default;

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './index.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve('./dist'),
		library: "prepack-experiments.logger",
		libraryTarget: "umd"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			}
		]
	},

	plugins: [
		//new UglifyJSPlugin()
		// new LodashModuleReplacementPlugin({
		// 	'collections': true,
		// 	'paths': true
		// }),

		new PrepackWebpackPlugin({
			prepack: {
				logStatistics: true,
				//trace: true,
				//logModules: true,
				//internalDebug: true
			}
		})
	]
};
