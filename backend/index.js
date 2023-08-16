require("dotenv").config()
const express = require("express");
const app = express();
const port = process.env.PORT || 6000



app.listen(port, async () => {
    console.log(`server running on ${port}`)
})