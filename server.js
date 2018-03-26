const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParse = require('body-parser');
//services
const UserService = require('./services/user');
const TweetService = require('./services/tweet');

module.exports = (db, config) => {
    const app = express();
    //services
    const userService = new UserService(
        db.users
    );
    const tweetService = new TweetService(
        db.tweet
    );

    //controllers
    const apiController = require('./controllers/api')(
        userService,
        tweetService
    );

    //Mounting
    app.use(express.static('public'));
    app.use(cookieParser());

    app.use(bodyParse.json());
    app.use('/api', apiController);

    return app;
};
