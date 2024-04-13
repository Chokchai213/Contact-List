require("dotenv").config();
var express = require('express')
var cors = require('cors')
app = express()
app.use(cors())

const dbName = "ContactList"

port = process.env.PORT || 5000
const mongoose = require('mongoose')
bodyParser = require('body-parser')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {dbName : dbName}).then((res) => {
    console.log('Sucessfully Connected to MONGODB');
}).catch((err) => {
    console.log('err :: ',err)
})

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use("/login", require("./routes/loginRoute"));
app.use("/contacts", require("./routes/contactRoute"));

app.listen(port, () => {
    console.log("Server Running on Port :: ",port)
})


