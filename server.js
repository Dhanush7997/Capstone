//import modules express body-parser cors
//import modules
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
//import url
let url = require('./urls')
//create rest object
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origine Resource Sharing -> communication among various
let login = require('./login/login')

app.use("/login", login)



app.use(cors())
//connect to mongodb
mongoose.connect(url, { dbName: "Capstone" })
.then(() => {
console.log('Connection Success')
}, (errRes) => {
console.log("Connection faild:- ", errRes)
})

//import routes
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
//use routes
app.use("/", productRoutes)
app.use("/", userRoutes)
//create port
let port = 8080
//assign port no
app.listen(port, () => {
console.log('Server listening port no:- ', port)
})

