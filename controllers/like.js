const CrudController = require('./crud');

class LikeController extends CrudController{
    constructor(likeService){
        super(likeService);

        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);

        this.registerRoutes();
    }

    async create(req, res){
        req.body.tweetId = req.params.tweetId;
        req.body.authorId = req.params.userId;
        let data = await this.service.create(req.body);
        res.json(data); 
    }

    async delete(req, res){
        req.body.tweetId = req.params.tweetId;
        req.body.authorId = req.params.userId;
        req.body.id = req.params.id;
        let data = await this.service.delete(req.body);
        res.json(data); 
    }
}

module.exports = (likeService) => {
    const controller = new LikeController(likeService);
    return controller.router;
}