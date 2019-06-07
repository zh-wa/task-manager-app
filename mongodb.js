// CRUD 

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'abc',
    //     age: 50
    // }, (error, res) => {
    //     if(error) {
    //         console.log('Unable to insert data!');
    //     } 
    //     console.log(res.ops);
    // })

    // db.collection('tasks').insertMany([{
    //     description: 'Learn Node.js',
    //     completed: false
    // }, {
    //     description: 'Learn HTML and CSS',
    //     completed: true
    // }, {
    //     description: 'Learn Java',
    //     completed: false
    // }], (error, result) => {
    //     if(error) {
    //         return console.log(error);
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     if(error) {
    //         return console.log('Unable to find tasks');
    //     }
    //     console.log(tasks);
    // })

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((tasks) => {
        console.log(tasks);
    }).catch((error) => {
        console.log('Unable to update data');
    })
})