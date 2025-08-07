const express = require('express');
const router = express.Router()
const { Login, Register, Logout, GoogleLogin } = require("../controllers/authController")

router.post('/register', Register)
router.post('/login', Login)
router.post('/google-login', GoogleLogin)
router.post('/logout', Logout)

module.exports = router;