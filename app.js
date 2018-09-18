const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT || 3000)
const languages = require('./routes/languages')
const countries = require('./routes/countries')

const app = express()

app.use(cors())
app.use(bodyParser.json())

//Routes
app.use(languages)
app.use(countries)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found. Be sure to append /XYZ!");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  });
});

app.listen(port, () => {console.log(`Listening on port ${port}`)})