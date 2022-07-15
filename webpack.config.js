const path = require("path");
require("dotenv").config();
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isDevMode = process.env.NODE_ENV === "development";
const PORT = process.env.PORT || 4050;

module.exports = {
  mode: isDevMode ? "development" : "production",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devtool: isDevMode ? "eval" : null,
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: "auto",
    hot: true,
    open: true,
    liveReload: true,
    allowedHosts: "auto",
  },
  // terser-webpack-plugin configuration
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        exclude: /\/node_modules/,
      }),
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isDevMode ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sourceMap: true,
            },
          },
        ],
      },
      {
        // image configuration
        test: /\.(png|jpg|gif|svg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        // font configuration
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      title: "React App",
      filename: "index.html",
      template: path.resolve(__dirname, "public", "index.html"),
      hash: true,
    }),
  ],
};
