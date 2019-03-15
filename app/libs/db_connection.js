var mongoose = require('mongoose');
var connection;

module.exports = function () {
    if (!connection) {
        connection = mongoose.connect('mongodb://localhost:27017/socketio', {useNewUrlParser:true});
    }
    return mongoose;
} 