var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var login = require('./routes/login');
var employee = require('./routes/employee');
var product = require('./routes/product');
var contact = require('./routes/contact');
var subscriber = require('./routes/subscriber');
var image = require('./routes/image');

var port = 3000;

var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

var cors = require('cors');

app.use(cors());

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api/login', login);
app.use('/api/employees', employee);
app.use('/api/products', product);
app.use('/api/contacts', contact);
app.use('/api/subscribers', subscriber);
app.use('/api/images', image);

app.listen(port, function () {
    console.log('Server started on port ' + port);
});