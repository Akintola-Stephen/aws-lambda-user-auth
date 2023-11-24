const express = require("express")
const router = express.Router()
const signUpControllerObjCall = require("../controller/signUp.controller")


router.post('/sign-up', signUpControllerObjCall.signUp)

module.exports = router;