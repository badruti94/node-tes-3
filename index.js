const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send('tes-5')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on ${port}`);
})