const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // 개발 서버 설정
  devServer: {
    port: 8080,
    hot: true,
    compress: true,
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
  watchOptions: {
    aggregateTimeout: 200,
    ignored: /node_modules/,
    poll: 1000,
  },
  resolve: {
    // 생략 가능한 확장자
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new ESLintPlugin({}),
  ],
};
