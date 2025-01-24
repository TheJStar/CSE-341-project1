const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "my Api",
        description: "Great Api"
    },
    host: "cse-341-project1-j2zk.onrender.com",
    schemes: ["https", "http"]
}

const outputfile = "./swagger.json";
const endpoint = ["./routes/index.js"]

swaggerAutogen(outputfile, endpoint, doc)