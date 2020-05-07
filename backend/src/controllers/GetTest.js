module.exports = {
  async gettest (req, res) {
    try {
      console.log("GET TEST");
      console.log(req.body.person.name);
      console.log(req.body.person.lastname);
      res.sendStatus(200);            
    } catch (err) {
      res.send(err)
      res.status(400).send({
        error: 'get error'
      })
    }
  }
}