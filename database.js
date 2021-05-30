const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://dibodev:Rangiora62!@cluster0.lismu.mongodb.net/dibodev?retryWrites=true&w=majority', {useNewUrlParser: true});
const conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;
