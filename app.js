const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT || 3000)

//This will be for the routes
// const players = require('./routes/players')

app.use(cors())
app.use(bodyParser.json())

//THis is also for the routes
// app.use('/players', players)

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