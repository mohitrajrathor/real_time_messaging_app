
const express = require('express')
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