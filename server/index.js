const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const options = {
    cors: true,

}
const PORT = process.env.PORT || 5000
const router = require('./router')

const app = express();
const server = http.createServer(app)
const io = socketio(server, options)

io.on('connection', (socket) => {
    console.log('We have a new connection')
    socket.on('disconnect', () => {
        console.log('User had left')
    })
})
app.use(router)

app.listen(PORT, () => {
    console.log(`Server has Started on port ${PORT}`)
})
