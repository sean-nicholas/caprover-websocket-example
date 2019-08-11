const express = require('express')
const http = require('http')
const { resolve } = require('path')
const socketio = require('socket.io')

const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.get('/', (req, res) => {
  const file = resolve(__dirname, '..', 'public', 'index.html')
  res.sendFile(file)
})

io.on('connection', (socket) => {
  socket.emit('message', 'Websockets work!')
})

server.listen(port, () => {
  console.log(`listening on *:${port}`)
})