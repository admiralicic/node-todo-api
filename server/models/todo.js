const mongoose = require('mongoose');

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

module.exports = {Todo};