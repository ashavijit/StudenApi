const mongoose = require('mongoose');
let db_url="mongodb+srv://avijit:123456qwe@cluster0.jro1w.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db_url, {
    keepAlive: true,
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

module.exports = mongoose.connection;