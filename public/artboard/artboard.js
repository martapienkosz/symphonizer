let socket = io(); // opens and connect to socket

//listen for confirmation
socket.on("connect", () => {
  roomId = window.location.pathname;
  roomId = roomId.substring(1, roomId.length - 1);
  socket.emit("room", roomId);
});
let clientRole;
socket.on("role", (role) => {
  console.log(role);
  clientRole = role;
});
sounds = [];
function preload() {
  sounds[0] = loadSound("assets/sound/normal/0.wav");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {}

socket.on("keyPressed", (data) => {
  switch (data) {
    case 65:
      createRedCircle();
      sounds[0].play();
      break;
    case 66:
      createRedSquare();
  }
});

function keyPressed() {
  if (clientRole == "player") {
    socket.emit("keyPressed", keyCode);
  }
}
