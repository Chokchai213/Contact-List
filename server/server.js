require("dotenv").config();
var express = require('express')
var cors = require('cors')
app = express()
app.use(cors())

port = process.env.PORT || 5000
mongoose = require('mongoose')
User = require('./models/userListModel')
bodyParser = require('body-parser')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, function(error){
    if(error) throw error
    console.log('Connected to MongoDB');
})

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./routes/userListRoutes')
routes(app)

app.listen(port, () => {
    console.log("Server Running on Port :: ",port)
})


