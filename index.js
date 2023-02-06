const express = require("express");
const path = require("path");
const app = express();

const db = require("./Config/mongoose");

app.use(express.static("./Assets"));

// set up express layouts
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

//extract style and scripts from subpages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// set up the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));

// use express router
app.use("/", require("./Routes"));

app.listen(3000, () => {
	console.log("Running on port 3000");
});
