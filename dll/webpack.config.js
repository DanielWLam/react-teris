const webpack = require('webpack');

const vendors = [
	'react',
	'react-dom'
];

module.exports = {
	entry: {
		'lib': vendors
	},
	output: {
		path: 'build',
		filename: '[name].js',
		library: '[name]'
	},
	plugins: [
		new webpack.DllPlugin({
			path: 'manifest.json',
			name: '[name]',
			context: __dirname
		})
	]
}