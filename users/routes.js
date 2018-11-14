const bcrypt = require('bcrypt')
const { Router } = require('express')
const User = require('../users/model')

const router = new Router()

router.post('/users', (req, res, next) => {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  }
  User
    .create(user)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: `User does not exist`
        })
      }
      return res.status(201).send(user)
    })
    .catch(error => next(error))
})

module.exports = router
