let express = require('express');
let http = require('http');
const { emit } = require('process');
let io = require("socket.io");

let app = express();
let server = http.createServer(app); // wrap the express app with http
io = new io.Server(server); // use socket.io on the http app

app.use('/', express.static('public'));


// sockets --> check for socket connection
io.sockets.on("connection", (socket) => {
    console.log("We have a new client", socket.id)
    // drop a message on the server when socket disconnects
    socket.on("disconnect", () => {
        console.log("socket has been disconnected", socket.id)
    })

    socket.on("randomSoundData", (data) => {
        console.log(data);
        io.sockets.emit("soundDataFromServer", data)
    })
})

// server listening on port
server.listen(8800, () => {
  console.log("server is up and running")
})

// Client has to send the message to the server --> EMIT
// Server has to receive and process this information --> ON
// Server emits information to ALL clients
// Client does soemthing when it gets information back --> ON