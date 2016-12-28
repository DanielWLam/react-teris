module.exports = {
	entry: __dirname + '/src/index.js,
	output: {
		path: __dirname + '/build'
		filename: 'app.js'
	},
	module: {
		loaders: [{
			test: /.(js|jsx)$/,
			loader: 'babel!eslint'
		}]
	}
}