const express = require('express')
const path = require('path')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/images/')
        
    },
    filename: (req, file, cb) => {
        
        cb(null, file.originalname)
    }
})


const upload = multer({ storage: storage })
const app = express()


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/profile', upload.single('memes'), (req,res) => {
    // console.log(req.file)
    res.send("file uploaded")
    console.log("done")
})

app.listen(80, () => console.log('server starting'))
