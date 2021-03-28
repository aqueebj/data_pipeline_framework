const express = require("express")
const path = require("path")

const app = express()
app.use(express.json())
// app.use(express.static('public'))

app.use('/',(req,res)=>{
    var request_method = req.method;
    console.log(req.method)
    console.log(req.body.inputs)

    res.sendFile(path.join(__dirname,'public','index.html'))
  })
app.post('/task',(req,res)=>{
    console.log(req.body)

})

app.listen(4000,()=>{
    console.log("Server is up and running")
})