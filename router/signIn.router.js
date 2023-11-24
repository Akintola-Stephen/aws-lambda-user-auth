const express = require("express")
const router = express.Router()
const signInControllerObjCall = require("../controller/signIn.controller")


router.post('/sign-in', signInControllerObjCall.signIn)

module.exports = router;