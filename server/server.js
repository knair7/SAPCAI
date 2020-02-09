const express = require("express");
// define our app using express server
const app = express();
// define port variable dynamic or local one - 8080
const port = process.env.PORT || 8080;
app.use("/", express.static(`${__dirname  }./../`));
app.listen(port, () => {
    console.log(`application runs on${  port}`);
});