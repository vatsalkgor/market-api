var path = require("path");
var fs = require("fs");

// taken from https://jlongster.com/Backend-Apps-with-Webpack--Part-I to get rid of package.json not found for sqlite3
var nodeModules = {};
fs.readdirSync("node_modules")
    .filter(function (x) {
        return [".bin"].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = "commonjs " + mod;
    });
module.exports = {
    entry: "./src/index.js",
    target: "node",
    output: {
        path: path.join(__dirname, "build"),
        filename: "backend.js",
    },
    externals: {
        "aws-sdk": "aws-sdk",
        ...nodeModules,
    },
};
