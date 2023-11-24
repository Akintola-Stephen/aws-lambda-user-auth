const express = require("express")


const userSignUpControllerObj = {
    signUp: async(req, res)=> {
        return res.status(200).json({msg: `User sign-up test endpoint`})
    }
}


module.exports = userSignUpControllerObj;