// const AuthenticationController = require('./controllers/AuthenticationController')
const GetTest = require('./controllers/GetTest')

module.exports = app => {
  //app.post('/register', AuthenticationController.register)
  app.post('/gettest', GetTest.gettest)
}