var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
var path = require('path');

module.exports={
	entry:'./src/main.ts',
	output:{
		path: path.join(__dirname, "dist"),
		filename:'app.bundle.js'
	},
	module:{
		loaders:[
			{test:/\.ts$/, loader:'ts-loader'},
			{ test: require.resolve('jquery'), loader: 'expose-loader?jQuery!expose-loader?$' }
		]
	},
	resolve:{
		extensions:[' ','.js','.ts']
	},
	plugins:[
		
		new webpack.ProvidePlugin({
		            $: "jquery",
		            jQuery: "jquery",
		            'window.jQuery': "jquery"
		}),
		new htmlWebpackPlugin({
			template:'./src/index.html'
		})
		
	]
}