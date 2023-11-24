const express = require("express")
const AmazonCognitoIdentity = require("amazon-cognito-identity-js")
const cognitoConfigCall = require("../config/cognito.config")


const userSignUpControllerObj = {
    signUp: async (req, res) => {
        let { name, role, username, password } = req.body;
        let userPool = new AmazonCognitoIdentity.CognitoUserPool(cognitoConfigCall)

        let attrList = []
        attrList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "name", Value: name }))
        attrList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "custom:role", Value: role }))

        let regex = /^(\+\d{3})?\d{9}$/;
        if (username.match(regex)) {
            attrList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "phone_number", Value: username }));
        } else {
            attrList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: username }));
        }

        userPool.signUp(username, password, attrList, null, (err, result) => {
            if (err) {
                return res.status(500).json({ msg: err.message });
            }
            const cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
            res.status(200).json({ "status": 1, "message": "user: " + cognitoUser.getUsername() + " successfully added" });
        });

    }
}


module.exports = userSignUpControllerObj;