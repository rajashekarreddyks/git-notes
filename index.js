const express = require('express')
const bodyParser = require('body-parser')

const route = require('./routes/route')

let app = express()

app.use(bodyParser.json())  

app.use(bodyParser.urlencoded({extended:true})) 

app.use('/', route)

app.listen(process.env.PORT || 3000, function(){
    console.log('express app running on port  ' + (process.env.PORT || 3000))
})





















