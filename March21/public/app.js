console.log("hi")

let socket = io(); // opens and connect to socket

//listen for confirmation
socket.on('connect', () => {
  console.log("client connected via sockets");
})

let playSound = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0, 0, 0)

    socket.on("soundDataFromServer", (data) => {
        console.log(data);
        playSoundWithData(data);
    })

    polySynth = new p5.PolySynth()
}

function mouseClicked() {
    let soundData = {a: random(2,7), b: random(2,7), c: random(2,7), x1:random(50, innerWidth-50) , y1:random(50, innerHeight-50) , x2:random(50, innerWidth-50) , y2:random(50, innerHeight-50) , x3:random(50, innerWidth-50), y3:random(50, innerHeight-50)}
    // emit this information to the server
    socket.emit("randomSoundData", soundData);
}


function playSoundWithData(data) {
    noStroke()
    userStartAudio();
    
    let dur = 1.5; // note duration (in seconds)
    let time = 0; // time from now (in seconds)
    let vel = 0.1; // velocity (volume, from 0 to 1)

    fill(253, 13, 53, 150)
    ellipse(data.x1, data.y1, (data.a)*30, (data.a)*30) // drawing a circle on emitting a sound
    polySynth.play('G'+data.a, vel, 0, dur); // playing a random note

    fill(255, 255, 20, 150)
    ellipse(data.x2, data.y2, (data.b)*30, (data.b)*30)
    polySynth.play('C'+data.b, vel, time += 1/3, dur);

    fill(4, 217, 255, 150)
    ellipse(data.x3, data.y3, (data.c)*30, (data.c)*30)
    polySynth.play('G'+data.c, vel, time += 1/3, dur);
    playSound = 0;
}