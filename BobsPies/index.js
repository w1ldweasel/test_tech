//Bringing express server and create app
let express = require('express');
let app = express();
let pieRepo = require('./repos/pieRepos');

//Use the express Router object
let router = express.Router();

let hc_password = "mytestpassword";
//Create GET to return a list of all pies
router.get('/', function(req, res, next){
    pieRepo.get(function(data) {
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All pies retrieved.",
            "data": data
        });
    }, function(err){
        next(err);
    });

});

    //Create GET/id to return a single pie
router.get('/:id', function(req, res, next){
    pieRepo.getById(req.params.id, function(data) {
        if (data) {
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "Single pie retrieved.",
                "data": data
            });
        }
        else {
        res.status(404).json({
            "status": 404,
            "statusText": "Not Found",
            "message": "The pie '" + req.params.id + "' could not be retrieved.", 
            "error": {
                "code": "NOT_FOUND",
                "message": "The pie '" + req.params.id + "' could not be retrieved.", 
            }
        });
    }
}, function(err) {
    next(err);
});
});

//Configure router so all routes are prefixed with /api/v1
app.use('/api/', router);

//Create server to listen on port 5000
var server = app.listen(5000, function(){
/*   console.log('Node server is running on http://localhost:5000');*/
console.log('Node server is running on http://localhost:5000');
console.log('Node server is running on http://localhost:5000');
})