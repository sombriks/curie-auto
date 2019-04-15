const esm = require("esm")(module)
module.exports = esm("./app/main.js").up()