const CrudController = require('./crud');

class UserController extends CrudController {
    constructor(userService, tweetService) {
        super(userService);

        const TweetController = require('./tweet')(tweetService);
        this.router.use('/:userId/tweets', TweetController);

        this.registerRoutes();
    }
}

module.exports = (userService, tweetService) => { 
    const controller = new UserController(userService, tweetService);
    return controller.router;
}