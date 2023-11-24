const express = require("express")

const app = express()
const userSignUpRouter = require("./router/signUp.router")
const userSignInRouter = require("./router/signIn.router")


const PORT = process.env.PORT || 5000


app.use('/v1', userSignUpRouter)
app.use('/v1', userSignInRouter)


app.get('/', (req, res)=>{
    return res.status(200).json({msg: `Server running on PORT ${PORT}`})
})


app.listen(PORT)