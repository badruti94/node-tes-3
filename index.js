const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors())

app.get('/', (req, res) => {
    res.send('tes-6')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on ${port}`);
})