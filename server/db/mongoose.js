const mongoose = require('mongoose');

mongoose.connect('mongodb://dbuser:dbuser1@ds123258.mlab.com:23258/admiralicic-todoapp', {useNewUrlParser: true})
.then(() => {
    console.log('Connected to mongodb!');
})
.catch((err) => {
    console.log('Unable to connect to mongodb!');
});

module.exports = { mongoose };