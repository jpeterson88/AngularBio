var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var nodemailer = require('nodemailer');

app.use(express.static(__dirname + '/static'));
app.use( bodyParser.json());

app.listen(process.env.PORT || 5000);


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'jpeter4223@gmail.com',
        pass: 'Riot4223'
    }
});

router.post('/contact', function(req, res) {
var htmlTpl = '<h4>Message from' + ' ' + req.body.params.name + '</h4><p><span>' + req.body.params.email + '</span</p><p>' + req.body.params.message + '</p>'; 

    mailOptions = {
        from: req.body.params.email,
        to: 'jpeter4223@gmail.com',
        subject: re.body.params.subjectList,
        html: htmlTpl,
        debug: true
    };

    transporter.sendMail(mailOptions, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log(response.message);
        }
        smtpTransport.close();
    });
});

router.get('/test', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

app.use('/api', router);
