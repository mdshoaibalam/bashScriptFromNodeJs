var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-data', function (req, res) {
    var name = req.body.firstName   ;
    
    res.send(name + ' Submitted Successfully!');
	let arg=name;
const exec = require('child_process').exec;
var yourscript = exec('sh file.sh '+arg+'',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});

