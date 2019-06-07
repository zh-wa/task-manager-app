const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is not valid');
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if(value < 0) {
//                 throw new Error('Age must be greater than 0!')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if(value.toLowerCase().includes('password')) {
//                 throw new Error('Password is invalid!')
//             }
//         }
//     }
// });

// const me = new User({
//     name: 'Anna',
//     email: ' anna@a.com',
//     password: ' jlfdhjkpassword '
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log(error);
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const myTask = new Task({
//     description: 'Learn Java'
// })

// myTask.save().then(() => {
//     console.log(myTask);
// }).catch((error)=> {
//     console.log('Unable to save data');
// })