const express = require('express');

module.exports = (
    userService,
    tweetService,
) => {
    const router = express.Router();

    //defining cntroller
    const userController = require('./user')(
        userService,
        tweetService
    );


    //defining routers
    router.use('/users', userController);

    return router;
}