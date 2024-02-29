const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session');

const userRouter = require('./routes/users')

require('dotenv').config();

const app = express()

app.set('trust proxy', 1)
app.use(session({   
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// db
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})

// config routers
app.use('/users', userRouter)

app.listen(process.env.PORT)