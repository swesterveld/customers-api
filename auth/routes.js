const {Router} = require('express')
const {toJWT, toData} = require('./jwt')
const User = require('../users/model')
const router = new Router()
const auth = require('./middleware')

router.post('/logins', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  
  if (!email || !password) {
    res.status(400).send({
      message: 'Please supply a valid email and password'
    })
  }
  else {
    // normally we would check the password here, now we just send a JWT
    res.send({
      jwt: toJWT({ userId: 1 })
    })
  }
})

router.get('/secret-endpoint', auth, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.user.email}.`,
  })
})

module.exports = router