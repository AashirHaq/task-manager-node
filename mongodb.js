// CRUD

const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }, 
    (error, client) => {

    if(error){
       return console.log('Unable to connect to database.') 
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID('606c5d9bccde702f54bb3179') }, (error, document) => {
    //     if(error){
    //         return console.log('Unable to fetch data.')
    //     }

    //     console.log(document)
    // })

    db.collection('users').find({ age: 27 }).toArray((error, documents) => {
        console.log(documents)
    })

    db.collection('users').find({ age: 27 }).count((error, count) => {
        console.log(count)
    })
})