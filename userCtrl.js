const users = require('./users')

module.exports = {
    readAll: function(req, res){
    console.log('getting users')
    res.send(users.find())},

    findUserById: function(req,res) {
    var id = req.params.id;
            res.status(200).send(users.findOne("id" ,id))
    },
    getAdmins: function(req,res) {
        var type = req.params.type;
        res.status(200).send(users.find('type', 'admin'))
    },
    getNonAdmins: function(req,res) {
       
        res.status(200).send(users.find('type', 'user'))
        
    },
    getUsersByFavorite: function(req, res){
        var fav = req.params.favorites;
        res.status(200).send(users.find('favorites', fav ))
    }
    
}