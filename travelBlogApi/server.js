const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');


let swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use('/api/v1', router);

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.static('public'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));




app.get('/', function (req, res) {
    res.sendFile('public/index.html');
});

app.get('/:root', function (req, res) {
    res.sendFile('public/index.html');
});


fs.readdirSync('./controllers').forEach(function (file) {
    if (file.substr(-3) == '.js') {
        var route = require('./controllers/' + file);
        route.controller(app);
    }
});

var PORT = 3005;
app.listen(PORT, function () {
    console.log('Server listening on ' + PORT);

});
