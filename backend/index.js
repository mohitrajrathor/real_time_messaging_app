
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// loading .env
dotenv.config()
const dbURI = process.env.MONGO_URI

// connecting to the database
const connectDB = () => {
    try {
        mongoose.connect(dbURI)
        console.log('Mongodb connected successfully...')
    }

    catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

connectDB();

const app = express()
const port = 3000 

app.use(express.json());

// making a simple request route 
app.get('/', (req, res) => {
    res.send('hello world!')
})


// print name
app.get('/name', (req, res) => {
    res.send('hello mohit!')
})


app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})