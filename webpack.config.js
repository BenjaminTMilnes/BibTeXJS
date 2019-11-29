const path = require("path");

module.exports = {
  entry: "bibtex.js",
  output: {
    filename: "bibtex.min.js",
    path: path.resolve(__dirname),
  },
};