const database = require("better-sqlite3");
module.exports = new database("customeronly1.database", {
    verbose: console.log,
});
