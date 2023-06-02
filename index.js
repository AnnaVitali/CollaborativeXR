const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const host = 'localhost'//webXR works only on https connection


//app.use(express.static(__dirname + '/src'));
console.log(__dirname);
console.log(path.join(__dirname, "src"))
console.log(path.join(__dirname, "dist"))
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, "src")));
app.use(express.static(path.join(__dirname, "dist")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '/html/index.html'));
})

app.listen(port, host, () => {
    console.log('Server started at http://' + host + ':' + port);
})