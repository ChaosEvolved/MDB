const express = require("express")

//init
const app = express()

app.listen(3000, ()=>{
   console.log('app is running on PORT 3000')
})

//routes
app.get('/books',(req,res)=>{
   res.json({mssg:"fuck you from node"})
})