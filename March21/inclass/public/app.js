let socket = io();
let r,g,b;

// listen for confirmation
socket.on("connect", () => {
    console.log("connected to the server via sockets")
})


// P5.js
function setup() {
    createCanvas(400, 400);
    background(220);
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    socket.on("mouseDatafromServer", (data) => {
        console.log(data);
        drawEllipseWithData(data);
    })
}
  
  //emit information of mouse positon everytime i move mouse
  function mouseDragged() {
    let mousePos =
    {x: round(mouseX),
        y: round(mouseY),r:20, r: red, g: green, b: blue};
    // emit this information to the server
    socket.emit('mousePositionData', mousePos);
  }

  function drawEllipseWithData(data) {
    fill(data.r);
    ellipse(data.x, data.y, data.r,data.r);
  }