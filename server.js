const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const uri = process.env.MONGODB_URI;

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:kfallon123@cluster0.lgoaq.mongodb.net/whiteboard?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true});

// configure CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

require("./controllers/quizzes-controller")(app)
require("./controllers/question-controller")(app)
require("./controllers/quiz-attempts-controller")(app)


//app.listen(process.env.PORT || 3002)
app.listen(3002)