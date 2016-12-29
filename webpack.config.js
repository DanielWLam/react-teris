module.exports = {
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname + '/build',
		filename: 'app.js'
	},
	eslint: {
		configFile: __dirname + '/.eslintrc.js',
	},
	module: {
		loaders: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel!eslint'
			}
		]
	},
	watch: true
}