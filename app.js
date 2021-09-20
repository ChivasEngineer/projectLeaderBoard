// reads in our .env file and makes those values available as environment variables
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const routes = require('./routes/main');
const secureRoutes = require('./routes/secure');

const redis = require('redis');
const redisClient = redis.createClient();//creates a new client

const cors = require('cors');

// setup mongo connection
const uri = process.env.MONGO_CONNECTION_URL;
mongoose.connect(uri);
mongoose.connection.on('error', (error) => {
    console.log(error);
    process.exit(1);
});
mongoose.connection.on('connected', function () {
    console.log('connected to MongoDB');
});

//redis client
redisClient.on('connect', function () {
    console.log('connected to redis');
});

redisClient.on('error', function (err) {
    console.log("Something was wrong on the client" + err);
});

// create an instance of an express app
const app = express();

// update express settings
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.json()); // parse application/json
app.use(cookieParser());

//cors enable for client side React project
app.use(cors());

app.get('/localhost/:5000', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})

// require passport auth
require('./auth/auth');

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// main routes
app.use('/', routes);
app.use('/', passport.authenticate('jwt', { session: false }), secureRoutes);

// catch all other routes
app.use((req, res, next) => {
    res.status(404);
    res.json({ message: '404 - Not Found' });
});

// handle errors
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err });
});

// have the server start listening on the provided port
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT || 3000}`);
});