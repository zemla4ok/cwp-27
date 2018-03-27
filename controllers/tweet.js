const CrudController = require('./crud');

class TweetController extends CrudController {
    constructor(tweetService, likeService) {
        super(tweetService);

        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.update = this.readAll.bind(this);
 
        const LikeController = require('./like')(likeService);
        this.router.use('/:tweetId/likes', LikeController);

        this.registerRoutes();
    }

    async readAll(req, res){
        req.body.authorId = req.params.userId;
        let data = await this.service.readAll(req.body);
        res.json(data);
    }
    
    async create(req, res){
        req.body.authorId = req.params.userId;
        let data = await this.service.create(req.body);
        res.json(data);
    }

    async update(req, res){
        req.body.authorId = req.params.userId;
        let data = await this.service.update(req.params.id, req.body);
        res.json(data);
    }
}

module.exports = (tweetService, likeService) => { 
    const controller = new TweetController(tweetService, likeService);
    return controller.router;
}