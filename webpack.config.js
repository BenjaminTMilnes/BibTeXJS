const path = require("path");

module.exports = {
    entry: "./source/bibtex.js",
    output: {
        filename: "bibtex.min.js",
        path: path.resolve(__dirname, "distribution"),
    },
};