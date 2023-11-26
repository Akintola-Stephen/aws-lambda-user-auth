# aws-lambda-user-auth


AWS Lambda User Sign-Up / Sign-In Using AWS DynamoDB and AWS Cognito Services

```
AWS LAMBDA  - AWS Lambda function that allows users to register by providing their details and subsequently log in.
```

## Code structure explanation

This project work contains the follwing folders.

- controller: user sign Up / sign In Controller
- router - API endpoints for both signing a user up an login
- service - createUser function Dispatcher
- Config - Configurations to aws cognito service




#### Routes ⚡

| Routes               | HTTP Methods | Description                    |
| :------------------- | :----------- | :----------------------------- |
| localhost:5000/v1/sign-up   | POST         | User registration route |
| localhost:5000/v1/sign-in   | POST          | user login endpoint   |



### Setup

To run this project locally, git clone repo and add an `.env` file in the root with your aws:

```
USERPOOL_ID,
CLIENT_ID,
REGION
```

Then execute in command prompt:

```
$ cd aws-lambda-user-auth
$ npm install
$ node app.js or npm start (  To support nodemon)
```
