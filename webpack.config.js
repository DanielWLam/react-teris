var webpack = require('webpack');
const HtmlWebpackPlugin = require('webpack-html-plugin');

module.exports = {
	entry: {
		app: __dirname + '/src/index.js',
		vendor: ['react', 'react-dom', 'redux', 'react-redux', 'immutable', 'redux-immutable', 'classnames']
	},
	output: {
		path: __dirname + '/build',
		filename: 'app.js',
		// publicPath: '/dist/', //require.ensure路径
		// chunkFilename: 'js/apps/[name].min.js' // 忘了干嘛的
	},
	eslint: {
		configFile: __dirname + '/.eslintrc.js',
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.less$/,
				loader: 'style!css?modules&localIdentName=[local]-[hash:base64:5]!less'
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendors.js'), //提取公共组件库
		new webpack.HotModuleReplacementPlugin()
		// new HtmlWebpackPlugin({
		// 	template: __dirname + '/src/index.tpl.html'
		// })
	],
	// watch: true
	devServer: {
		contentBase: './build',
		color: true,
		historyApiFallback: false,
		port: 8456,
		hot: true,
		inline: true,
		host: 'localhost'
	}
}