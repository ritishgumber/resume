var express = require("express");
var path = require('path')
module.exports = function () {
    var app = express();
    app.set('port', process.env.PORT || 8888);
    app.use(express.static('public'));
    app.use(express.static('public'));
    app.engine('html', require('ejs').renderFile);
    app.get('/status', (req, res) => {
        res.status(200).send({
            status: 200,
            message: 'Ok'
        })
    })
    app.get('/', function (req, res) {
        res.sendFile((path.join(__dirname, 'public', 'resume.pdf')));
    });
    return app;

}