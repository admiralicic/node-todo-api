const mongoose = require('mongoose');


mongoose.connect('mongodb://dbuser:dbuser1@ds123258.mlab.com:23258/admiralicic-todoapp', {useNewUrlParser: true})
.then(() => {
    console.log('Connected to mongodb!');
})
.catch((err) => {
    console.log('Unable to connect to mongodb!');
});

let Todo = mongoose.model('Todo', {
    text: {
        required: true,
        minLength: 1,
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    }
});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }).catch(e => {
//     console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//     text: 'Something to do'
// });

// otherTodo.save().then(doc => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }).catch(e => {
//     console.log('Unable to save todo');
// });

var newUser = new User({
    email: ' admir.alicic@gmail.com '
});

newUser.save().then(doc => {
    console.log(JSON.stringify(doc, undefined, 2));
}).catch(e => {
    console.log('Unable to save user');
});