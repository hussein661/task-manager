const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const User = require('./models/User')
require('./db/mongoose')
app.use(express.json())

app.post('/users',(req,res)=>{
    const user = new User(req.body)
    user.save().then((user)=>{
        console.log("succeess")
    }).catch(error=>{
        console.log(error)
    })
})

app.listen(port,()=>{
    console.log('server is running on port ' + port)
})

