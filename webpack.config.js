const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  // indica el archivo principal donde webpack leera todo los archivos importados
  entry: {
    main: "./js/index.js",
  },

  // indica la salida de los archivos empaquetados en uno solo
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "app.js",
  },

  devServer: {
    compress: true,
    hot: true,
    watchContentBase: true,
    port: 8080
  },

  plugins: [new HtmlWebpackPlugin({
      title: 'CSS form mini framework',
      filename: path.resolve(__dirname, "index.html")
    })]
};
