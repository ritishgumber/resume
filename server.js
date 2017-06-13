var express = require("express");
module.exports = function() {
    var app = express();
    app.set('port', process.env.PORT || 8888);

    app.use(express.static('public'));

    app.engine('html', require('ejs').renderFile);

    app.get('/', function(req, res) {
        res.redirect("https://ritishdocs.s3.amazonaws.com/Ritish%20Gumber%20resume.pdf1497362808787");
    });
    return app;

}
