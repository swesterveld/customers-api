const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt')

const router = new Router()

router.post('/users', (req, res, next) => {
    const user = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }
    User.create(user).then(user => {
        user.password = undefined
        res.json(user)
    }).catch(error => next(error))
})

module.exports = router