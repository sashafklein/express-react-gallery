express = require 'express'
path = require 'path'
favicon = require 'serve-favicon'
logger = require 'morgan'
cookieParser = require 'cookie-parser'
bodyParser = require 'body-parser'
compileSass = require 'express-compile-sass'

routes = require './routes/index'
users = require './routes/users'

# load env variables from (gitignored) .env file
env = require('node-env-file')
env __dirname + '/.env'

app = express()
staticPath = path.join __dirname, 'public'

# view engine setup
app.set 'views', path.join __dirname, 'views'
app.set 'view engine', 'jade'

app.use favicon "#{__dirname}/public/favicon.ico"
app.use logger 'dev'
app.use bodyParser.json()
app.use bodyParser.urlencoded
  extended: false
app.use cookieParser()

app.use compileSass(
  root: staticPath
  sourceMap: true
  sourceComments: true
  watchFiles: true
  logToConsole: true)

app.use express.static staticPath

app.use '/', routes
app.use '/users', users

# catch 404 and forward to error handler
app.use (req, res, next) ->
  err = new Error 'Not Found'
  err.status = 404
  next err

# error handlers

# development error handler
# will print stacktrace
if app.get('env') is 'development'
  app.use (err, req, res, next) ->
    res.status err.status or 500
    res.render 'error',
      message: err.message,
      error: err

# production error handler
# no stacktraces leaked to user
app.use (err, req, res, next) ->
  res.status err.status or 500
  res.render 'error',
    message: err.message,
    error: {}

module.exports = app
