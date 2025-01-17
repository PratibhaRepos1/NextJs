//This application serving as api endpoints

const express = require("express");
const app = express();
const PORT = 3001;
// const cors = require("cors");

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 
//   }

//   app.use(cors(corsOptions));



const fs = require("fs");
const path = require("path");
const  pathToFile = path.resolve("./data.json");

const getResources = () => JSON.parse(fs.readFileSync(pathToFile));

//expose endpoints
app.get("/", (req, res) => {
    res.send("Hello World");

})

app.get("/api/resources", (req, res) => {
    const resources = getResources();
    res.send(resources);
})

app.listen(PORT, () => {
    console.log("Server is listening on port: " + PORT);
})