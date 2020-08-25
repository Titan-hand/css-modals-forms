const path = require("path");

module.exports = {
  // indica la salida de los archivos empaquetados en uno solo
  output: {
    path: path.resolve(__dirname, "buid/"),
    filename: "app.js",
  },

  // indica el archivo principal donde webpack leera todo los archivos importados
  entry: {
    main: "./js/index.js",
  },
};
