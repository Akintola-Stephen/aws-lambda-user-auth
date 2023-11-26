const express = require("express")
const AmazonCognitoIdentity = require("amazon-cognito-identity-js")
const cognitoConfigCall = require("../config/cognito.config")
const signInUserService = require("../service/signIn")
const AWS = require('aws-sdk');


const userSignInControllerObj = {
    signIn: async (req, res) => {
        let { username, password } = req.body;

        let authData = { Username: username, Password: password };

        // let authDetails = new AmazonCognitoIdentity.AuthenticationDetails(authData)

        let userPool = new AmazonCognitoIdentity.CognitoUserPool(cognitoConfigCall)

        let userData = { Username: username, Pool: userPool };

        let cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                // Inserts record to my dynamoDB database instance Table
                signInUserService(password, username, 10)
                res.status(200).json({
                    "status": 1, "message": "user signed in successfully ", "data": {
                        "idToken": result.getIdToken().getJwtToken(),
                        "accessToken": result.getAccessToken().getJwtToken(),
                        "refreshToken": result.getRefreshToken().getToken(),
                        "shopId": "1"
                    }
                });
            },
            onFailure: (err) => {
                res.status(200).json({ "status": 0, "message": "User sign in failed " + err });
            },
        });
        return res.status(200).json({ msg: `User sign-In test endpoint` })
    }
}


module.exports = userSignInControllerObj;