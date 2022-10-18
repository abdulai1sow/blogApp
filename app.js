const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const session = require('express-session')
const MongoStore = require('connect-mongo')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000
app.use(morgan('dev'))
app.use(express.json())
//when ever you need get access to forms
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(session({
  secret: process.env.SECRET,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  resave: false,
  saveUninitialized: true
}))

//method over ride
app.use(methodOverride('_method'))

//app settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/blog',require('./controllers/BlogRouter'))
app.use('/user', require('./controllers/UserRouter'))

app.use('/', (req, res) => {
  res.render('pages/Home')
})

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}...`);

  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  
  mongoose.connection.once('open', () => {
    console.log('connected to mongoDB');
  });
})