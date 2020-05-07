const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
//const {sequelize} = require('./models')
const config = require('./config/config')
const multer = require('multer')
var path = require('path')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../firmware-storage'),
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
const upload = multer({
  storage: storage
}).single('myImage')

app.post('/firmware-upload', (req, res) => {
  upload(req, res, (err) => {
    console.log(req.body)
    if (err) {
      console.log(err)
      res.send({'err': 'error'})
    } else {
      console.log(req.file)
      res.send({'msg': 'OK'})
    }
  })
});

app.listen(config.port, () => console.log(`Example app listening at http://localhost:${config.port}`));