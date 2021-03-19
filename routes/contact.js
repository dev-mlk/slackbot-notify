
var express = require('express');
var router = express.Router();
var qs = require('querystring');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('partials/contact',
    {
        qs: req.query,
        title: 'Contact Validation'
    });
;
});


router.post('/', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render('partials/contact-success', 
    {
        qs: req.body,
        title: 'Contact Report'
    });
     
});

module.exports = router;