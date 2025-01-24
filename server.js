const express = require("express");
const app = express();

const mongodb = require("./db/database");

const port = process.env.PORT || 3000;

app.use("/", require("./routes/index"));


mongodb.initDb((err)=>{
    if (err) {
        console.log(err)
    } else {
        app.listen(port, () => {
            console.log(`Db is listening and node is Running on port: ${port}`);
        })
    }
})
