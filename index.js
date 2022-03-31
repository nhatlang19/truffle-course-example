var express = require('express')
var bodyParser = require('body-parser')
const morgan = require('morgan');
var courseRouter = require('./router/course');
var courseUserRouter = require('./router/course_user');
const { AppDataSource } = require('./config/data-source');

AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized")
    var app = express()
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())
    app.use(require('express-status-monitor')());
    app.use(express.static('public')) // middleware
    app.use(morgan('tiny'));
    app.listen(3001);
    console.log('Server starting, port 3001 ...');

    app.get('/',  (req, res) => {
        res.json({
            "service": 'course',
            "timestamp": Date.now()
        });
    })

    app.use('/api/courses', courseRouter);
    app.use('/api/course_users', courseUserRouter);
    
});

