const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	devServer: {
		contentBase: path.join(__dirname),
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		host: '0.0.0.0',
		publicPath: 'dist/',
		port: 4000,
	},

	devtool: 'source-maps',

	entry: {
		main: path.join(__dirname, 'index')
	},

	module: {
		rules: [
			{
				test: /\.css$/,

				use: [
					{
						loader: 'style-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader'
					}
				]
			},

			{
				test: /\.(js|jsx)$/,

				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-react']
						}
					}
				] 
			}
		]
	},

	mode: 'development',

	output: {
		chunkFilename: '[name].js',
		filename: '[name].js'
	},

	plugins: [],

	optimization: {
		// splitChunks: {
		// 	cacheGroups: {
		// 		vendors: {
		// 			priority: -10,
		// 			test: /[\\/]node_modules[\\/]/
		// 		}
		// 	},

		// 	chunks: 'async',
		// 	minChunks: 1,
		// 	minSize: 30000,
		// 	name: true
		// }
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
			'node_modules',
			path.join(__dirname, 'src')
		]
	}

};
