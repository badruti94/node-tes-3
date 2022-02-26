const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
require('dotenv').config()
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors())


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().getTime()}-${file.originalname}`)
    }
})
const upload = multer({
    storage
}).single('file')


app.get('/', (req, res) => {
    res.send('tes-8')
})

app.post('/tes', upload, async (req, res) => {
    const result = req.file.path
    console.log(result);
    res.send('tes');
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on ${port}`);
})