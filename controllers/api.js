const express = require('express');

module.exports = (
    userService,
    tweetService,
    likeService
) => {
    const router = express.Router();

    //defining cntroller
    const userController = require('./user')(
        userService,
        tweetService,
        likeService
    );


    //defining routers
    router.use('/users', userController);

    return router;
}