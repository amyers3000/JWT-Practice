const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const userRoutes = require('./controllers/User')

const app = express()

// middleware
app.use(express.json())

app.use('/user', userRoutes)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err))

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))