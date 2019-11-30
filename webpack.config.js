const path = require("path");
const glob = require("glob");

var entry = "./source/bibtex.js";
var outputFileName = "bibtex.min.js";
var outputPath = "distribution";

process.env.TESTBUILD = true;

if (process.env.TESTBUILD) {
    var entry = "./tests/bibtex_exporter.test.js";
    var outputFileName = "main.js";
    var outputPath = "tests";
}

module.exports = {
    entry: entry,
    output: {
        filename: outputFileName,
        path: path.resolve(__dirname, outputPath),
    },
};