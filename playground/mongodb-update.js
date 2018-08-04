// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://dbuser:dbuser1@ds123258.mlab.com:23258/admiralicic-todoapp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b657612b647252fccd14a47')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});