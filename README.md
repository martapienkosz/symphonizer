## March 21 | Real-time + Multi-Person - Sockets and Socket.io

### Setup
For my first website using socket.io I have decided to created a simple multi-person music instrument.

1. I have created new folder (`npm init`), installed packages (`npm install -s express; npm install -s socket.io`), added script in package.json (`"start" : "nodemon index.js"`).
2. In index.js I have set up the server so it serves the public folder (`app.use('/', express.static('public'))`), included the http server (`let http = require('http'); let server = http.createServer(app)`)
3. Created index.html and app.js and included p5.js libraries (`<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>` and `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>`)
4. Included sockets (`let io = require('socket.io'); io = new io.Server(server)`) and checked for the socket connection (`io.sockets.on('connection', (socket) => { console.log("we have a new client: ", socket.id)})`)
5. Added library to index.html (`<script type="text/javascript" src="/socket.io/socket.io.js"></script>`) and added connect function to the server in app.js

### P5.js
I wanted my digital website instrument to produce the sound on `mouseClicked`. I have used the `polySynth.play()` function that would play a sequence of G, C and G notes of a random octave `random(2,7)`. 

````
polySynth.play('G'+data.a, vel, 0, dur);
polySynth.play('C'+data.b, vel, time += 1/3, dur);
polySynth.play('G'+data.c, vel, time += 1/3, dur);
````

I have included the emit function that sends the message to the server.

```
function mouseClicked() {
    let soundData = {a: random(2,7), b: random(2,7), c: random(2,7)}
    // emit this information to the server
    socket.emit("randomSoundData", soundData);
}
```

Nexly I have included code in the server that receives and processes the `emit` information adn emits this informtaion back to ALL clients

````
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
````

Lastly I enabled client to access the information back from the server and started the playSoundWithData(data) function that in adition to playing sound draws a circle in a random place with the the diameter corresponding to the octave number (`ellipse(data.x1, data.y1, (data.a)*30, (data.a)*30)`).

```
socket.on("soundDataFromServer", (data) => {
  console.log(data);
  playSoundWithData(data);
})
```

![img](https://github.com/martapienkosz/connectionslab/edit/main/March21/dcmt/one.png)
