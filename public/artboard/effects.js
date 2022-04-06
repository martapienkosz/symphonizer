class redCircle {
  constructor() {
    this.r = 0;
    this.state = true;
    this.opacity = 255;
  }
  play() {
    stroke(0, 0, 0, this.opacity);
    noFill();
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

class fourPararellLines {
  constructor() {
    this.i = 0;
    this.h = 150;
    this.s = 100;
    this.posx = window.innerWidth / 4;
    this.posy = window.innerHeight / 4;
    this.w_max = window.innerWidth / 2;
    this.n = 4;
    this.w = window.innerWidth / 8;
    this.wdif = 0;
    this.easing = 0.01;
  }

  play() {
    if (this.w < this.w_max) {
      for (this.c = 0; this.c <= this.n; this.c++) {
        rect(this.posx, this.posy + (this.h + this.s) * this.c, this.w, this.h);
        this.wdif = this.w_max - this.w;
        this.w = this.w + this.wdif * this.easing;
        this.i++;
      }
    }
  }
}

class dynamicBackgroundChange {
  constructor() {
    this.i = 100;
    this.t = 0;
    this.cnt = 0;
  }

  play() {
    if (this.t < 100) {
      background(0, 40, 0, this.t);
      this.t = this.t + 10;
    }
    if (this.t == 100) {
      background(220);
      this.t = 0;
    }
  }
}

class smoothTransition {
  constructor() {
    this.y = 0;
    this.x = 0;
    this.w = window.innerWidth / 8;
    this.h = window.innerHeight;
    this.cnt = 0;
  }

  play() {
    background(0);
    rect(this.x, this.y, this.w, this.h);
    this.w += 20;
    this.cnt++;
    if (this.cnt > 20) {
      this.x += 16;
    }
  }
}
let colors = [
  {
    r: 0,
    g: 0,
    b: 255,
  },
  {
    r: 0,
    g: 255,
    b: 0,
  },
  {
    r: 255,
    g: 0,
    b: 0,
  },
];
class expandingPolygon {
  constructor(n) {
    this.n = n;
    this.a = random(100, 200);
    this.x = random(50, width - 50);
    this.y = random(50, height - 50);
    this.opacity = 255;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  play() {
    strokeWeight(4);
    stroke(this.color.r, this.color.g, this.color.b, this.opacity);
    noFill();
    this.regularPolygon(this.x, this.y, this.n, this.a);
    this.a++;
    this.opacity -= 2;
  }
  regularPolygon(x, y, n, radius) {
    beginShape();
    for (let i = 0; i < n; i++) {
      vertex(x + cos((i * TAU) / n) * radius, y + sin((i * TAU) / n) * radius);
    }
    endShape(CLOSE);
  }
}
