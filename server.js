const express = require("express");
const app = express();

const mongodb = require("./db/database");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Z-key");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});
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
