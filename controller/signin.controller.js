const express = require("express")


const userSignInControllerObj = {
    signIn: async(req, res)=> {
        return res.status(200).json({msg: `User sign-In test endpoint`})
    }
}


module.exports = userSignInControllerObj;