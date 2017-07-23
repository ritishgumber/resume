var express = require("express");
var path = require('path')
var cronjob = require('cron-job');
const axios = require('axios')
module.exports = function () {
    var app = express();
    app.set('port', process.env.PORT || 8888);
    cronjob.startJobEveryTimegap(cronjob.date_util.getNowTimestamp(), 28 * 60, () => {
        axios.get('http://resume.ritishgumber.me').then((response) => {
            console.log('ritish resume', response.status);
        }, (err) => {
            console.log('resume err')
        })
    });
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
        // res.sendFile("https://ritishdocs.s3.amazonaws.com/Ritish%20Gumber%20resume.pdf1497362808787");
        res.sendFile((path.join(__dirname, 'public', 'resume.pdf')));
    });
    return app;

}