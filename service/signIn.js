const AWS = require("aws-sdk")
const dynamoDB = AWS.dynamoDB();
const sess = new AWS.sess();

let crypto = require("crypto")


const userSignInUtilObj = {
    createUser: async (userObj, salt, fn) => {
        var len = config.CRYPTO_BYTE_SIZE;
        crypto.randomBytes(len, function (err, token) {
            if (err) return fn(err);
            token = token.toString('hex');

            dynamoDB.putItem({
                TableName: config.DDB_TABLE,
                Item: {
                    email: {
                        S: userObj.email
                    },
                    passwordHash: {
                        S: userObj.password
                    },
                    passwordSalt: {
                        S: salt
                    },
                    username: {
                        S: userObj.username
                    },
                    verified: {
                        BOOL: false
                    },
                    verifyToken: {
                        S: token
                    }
                },
                ConditionExpression: 'attribute_not_exists (email)'
            }, function (err, data) {
                if (err) return fn(err);
                else fn(null, token);
            });
        });
    },

    getUser: async (email, fn) => {
        dynamoDB.getItem({
            TableName: config.DDB_TABLE,
            Key: {
                email: {
                    S: email
                }
            }
        }, (err, data) => {
            if (err) return fn(err);
            else {
                if ('Item' in data) {
                    var hash = data.Item.passwordHash.S;
                    var salt = data.Item.passwordSalt.S;
                    var verified = data.Item.verified.BOOL;
                    fn(null, hash, salt, verified);
                } else {
                    fn(null, null); // User not found
                }
            }
        });
    }
}


module.exports = userSignInUtilObj;