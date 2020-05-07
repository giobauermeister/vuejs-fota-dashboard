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
}).single('firmwareFile')

app.post('/firmware-upload', (req, res) => {
  upload(req, res, (err) => {
    console.log("trying to save firmware file");    
    console.log(req.body)
    if(req.body.firmwareFile == 'undefined') {
      res.sendStatus(400);
      return;
    }
    if (err) {
      console.log(err)
      res.send({'error': err})
    } else {
      console.log(req.file)
      //res.send({'msg': 'OK'})
      res.sendStatus(200);
    }
  })
});

app.listen(config.port, () => console.log(`Example app listening at http://localhost:${config.port}`));