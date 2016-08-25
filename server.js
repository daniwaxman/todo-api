var express = require('express');
var app  = express();
var PORT = process.env.PORT || '3000';
var todos = [{
    id         : 1,
    description: 'Meet Faygie for lunch',
    completed  : false

}, {
    id         : 2,
    description: 'Watch next video',
    completed  : false

}, {
    id         : 3,
    description: 'Send email to Jon',
    completed  : true
}];


app.get('/', function (req, res) {
    res.send('To do API Root');
});

//GET /todos
app.get('/todos', function (req, res) {
   res.json(todos);

});


//GET //todos/:id
app.get('/todos/:id', function (req, res) {
    var todoID = parseInt(req.params.id, 10);
    var matchedtodo ;

    todos.forEach(function (todo){
        if(todoID === todo.id){
            matchedtodo = todo
        }
    });
    if (matchedtodo) {
        res.json(matchedtodo);
    } else {
        res.status(404).send();
    }

    //res.json('Asking for todo with ID of ' + req.params.id);

});




app.listen(PORT, function (){
    console.log('Express listening on port ' + PORT + '!');
});

