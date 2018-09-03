const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
.then(() => {
    console.log('Connected to mongodb!');
})
.catch((err) => {
    console.log('Unable to connect to mongodb!');
});

module.exports = { mongoose };