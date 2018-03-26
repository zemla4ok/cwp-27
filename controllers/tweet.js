const CrudController = require('./crud');

class TweetController extends CrudController {
    constructor(tweetService) {
        super(tweetService);

        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.update = this.readAll.bind(this);

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

module.exports = (tweetService) => { 
    const controller = new TweetController(tweetService);
    return controller.router;
}