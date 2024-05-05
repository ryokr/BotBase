const config = require('./config.js')
const RunServer = require('./alive.js')
const Eris = require("eris")
const client = new Eris.Client(config.TOKEN)

RunServer()






client.connect()