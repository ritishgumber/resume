var express = require("express");
module.exports = function() {
    var app = express();
    app.set('port', process.env.PORT || 8888);

    app.use(express.static('public'));

    app.engine('html', require('ejs').renderFile);

    app.get('/', function(req, res) {
        res.redirect("https://ritishdocs.s3.amazonaws.com/Ritish's%20Re%CC%81sume%CC%81%20(9).pdf1488950512084");
    });
    return app;

}
