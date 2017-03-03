const  express = require('express'),
 bodyParser = require('body-parser');
var app = express();
var userCtrl = require('./userCtrl')
var port = 9090



    app.use(bodyParser.json());


app.get('/allUsers', userCtrl.readAll);
app.get('/user/:id', userCtrl.findUserById)
app.get('/admins', userCtrl.getAdmins)
app.get('/nonAdmin', userCtrl.getNonAdmins)
app.get('/favorites/:favorites', userCtrl.getUsersByFavorite)


    app.listen(port, function(){
    console.log('listening on port', port)
});


