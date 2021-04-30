const express = require('express')
const cors = require('cors')
const expressHandlebars = require('express-handlebars')
const mongoose = require('mongoose')
require('dotenv/config')

//importing routes
const schedule = require('./routes/schedule-router')
const message = require('./routes/message-router')

//Connect to Database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("connected to db"))

const app = express()
const port = 3000

app.engine('handlebars', expressHandlebars())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

//Cors enabled for all origins
app.use(cors())

// Routes
app.use('/schedule', schedule)
app.use('/message', message)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
