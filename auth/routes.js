const { Router } = require('express')
const { toJWT, toData } = require('./jwt')

const router = new Router()

router.post('/logins', (req, res, next) => {
  const {email,password} = req.body

  if (!email || !password) {
    return res.status(400).send({
      message: 'Please supply a valid email and password'
    })
  }
  // normally we would check the password here, now we just send a JWT
  return res.send({
    jwt: toJWT({userId: 1})
  })
})

module.exports = router