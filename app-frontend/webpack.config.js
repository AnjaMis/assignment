const path = require("path")
const webpack = require("webpack")
const appDirectory = path.resolve(__dirname, "./")

const babelLoaderConfiguration = {
	test: /\.js$/,
	// Add every directory that needs to be compiled by Babel during the build.
	include: [
		path.resolve(appDirectory, "index.js"),
		path.resolve(appDirectory, "components"),
		path.resolve(appDirectory, "node_modules/react-native"),
	],
	use: {
		loader: "babel-loader",
		options: {
			cacheDirectory: true,
			presets: ["module:metro-react-native-babel-preset"],
			plugins: ["react-native-web"],
		},
	},
}

module.exports = {
	entry: path.resolve(__dirname, "components", "index.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			babelLoaderConfiguration,
			{
				test: /\.(jsx|js)$/,
				include: path.resolve(__dirname, "src"),
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								[
									"@babel/preset-env",
									{
										targets: "defaults",
									},
								],
								"@babel/preset-react",
							],
						},
					},
				],
			},
			{
				test: /(@?react-(navigation|native)).*\.(ts|js)x?$/,
				include: /node_modules/,
				exclude: [/react-native-web/, /\.(native|ios|android)\.(ts|js)x?$/],
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							modules: true,
						},
					},
					{ loader: "sass-loader" },
				],
			},
			{
				test: /\.(jsx|js)$/,
				include: path.resolve(__dirname, "src"),
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								[
									"@babel/preset-env",
									{
										targets: "defaults",
									},
								],
								"@babel/preset-react",
							],
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		alias: {
			"react-native$": "react-native-web",
		},
		extensions: [".jsx", ".js"],
	},
}
