//const https = require("https");
const fs = require("fs");
const express = require("express");
var path = require("path");
const app = express();
const port = 3000;
const host = 'localhost'//webXR works only on https connection


/* FOR HTTPS connection
https.createServer(
    {
        key: fs.readFileSync("private_key.pem"),
        cert: fs.readFileSync("cert.pem"),
    }
    , app)
    .listen(port, host, () => {
        console.log('Server started at https://' + host + ':' + port);
    });
*/
app.use(express.static(path.join(__dirname, '/public')));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
})

app.listen(port, host, () => {
    console.log('Server started at https://' + host + ':' + port);
})

const Scene = require("./src/js/Scene.js");
const SessionType = require("./src/js/SessionType.js");
const XRSceneModel = require("./src/js/model/XRSceneModel.js");

const scene = new Scene();
const controller = scene.controller;

scene.createScene(SessionType.XRSession);
console.log(scene.controller.model);