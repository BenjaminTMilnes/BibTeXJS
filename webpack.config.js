const path = require("path");
const glob = require("glob");

var entry = { bibtex: "./source/bibtex.js" };
var outputPath = "distribution";

process.env.TESTBUILD = false;

if (process.env.TESTBUILD == true) {
    var entry = glob.sync(__dirname + "/tests/*.test.js");
    var outputPath = "tests-distribution";
}

module.exports = {
    entry: entry,
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, outputPath),
    }
};