const cognitoPoolDataConfig = {
    UserPoolId: process.env.USERPOOL_ID, // Your user pool id here    
    ClientId: process.env.CLIENT_ID, // Your client id here
    pool_region: process.env.REGION //AWS region
}


module.exports = cognitoPoolDataConfig;



