const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

var routes = require('./routes');
routes(app);

// mendaftarkan menu routes dari index.js
app.use('/auth', require('./middleware'));

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});