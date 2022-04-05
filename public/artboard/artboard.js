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
let aCounter;
let effects = [];
function draw() {
  background(255);
  for (let i = effects.length - 1; i >= 0; i--) {
    effects[i].play();
    if (!effects[i].state) {
      effects.splice(i, 1);
    }
  }
}
socket.on("keyPressed", (data) => {
  switch (data) {
    case 65:
      effects.push(new redCircle());
      sounds[0].play();
      break;
    case 66:
      effects.push(new fourCircle());
  }
});
function keyPressed() {
  if (clientRole == "player") {
    socket.emit("keyPressed", keyCode);
  }
}
