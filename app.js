const express = require("express")

const app = express()

const PORT = process.env.PORT || 5000


app.get('/', (req, res)=>{
    return res.status(200).json({msg: `Server running on PORT ${PORT}`})
})


app.listen(PORT)