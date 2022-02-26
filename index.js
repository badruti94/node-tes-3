const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
require('dotenv').config()
const cors = require('cors')
const cloudinary = require('cloudinary').v2

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

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


app.get('/', (req, res) => {
    res.send('tes-9')
})

app.post('/tes', upload, async (req, res) => {
    const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'uploads',
        use_filename: true,
        unique_filename: false
    })
    console.log(result);
    res.send('tes');
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on ${port}`);
})