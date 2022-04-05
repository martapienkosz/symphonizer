class redCircle {
  constructor() {
    this.r = 0;
    this.state = true;
    this.opacity = 255;
  }
  play() {
    stroke(0, 0, 0, this.opacity);
    circle(100, 100, this.r);
    this.r += 1;
    this.opacity -= 2;
    if (this.opacity <= 0) {
      this.state = false;
    }
  }
}

class fourCircle {
  constructor() {
    this.d = 50;
    this.x = 50;
    this.y = 200;
    this.cnt = 0;
    this.n = 4;
    this.t = 250;
    this.start = 0;
    this.current = 0;
    this.time = 0;
    this.state = true;
  }
  play() {
    if (this.cnt < this.n) {
      fill(250, 250, 250, this.t);
      circle(this.x, this.y, this.d);
      this.x += 2 * this.d;
      this.wait(100);
      this.cnt++;
      this.t = this.t - this.t / 2;
    }
  }
  wait(time) {
    this.start = millis();
    do {
      this.current = millis();
    } while (this.current < this.start + this.time);
  }
}
