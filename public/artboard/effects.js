let colors = [
  {
    r: 106,
    g: 4,
    b: 15,
  },
  {
    r: 157,
    g: 2,
    b: 8,
  },
  {
    r: 208,
    g: 0,
    b: 0,
  },
  {
    r: 220,
    g: 47,
    b: 2,
  },
  {
    r: 232,
    g: 93,
    b: 4,
  },
  {
    r: 244,
    g: 140,
    b: 6,
  },
  {
    r: 250,
    g: 163,
    b: 7,
  },
  {
    r: 255,
    g: 186,
    b: 8,
  },
];
class expandingCirle {
  constructor() {
    this.r = random(100, 200);
    this.state = true;
    this.opacity = 255;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.x = random(50, width - 50);
    this.y = random(50, height - 50);
    this.weight = random(3, 6);
  }
  play() {
    strokeWeight(this.weight);
    stroke(this.color.r, this.color.g, this.color.b, this.opacity);
    noFill();
    circle(this.x, this.y, this.r);
    this.r += 3;
    this.opacity -= 2;
    if (this.opacity <= 0) {
      this.state = false;
    }
  }
}

class fourCircle {
  constructor() {
    this.d = random(100, 200);
    this.x = random(50, width - 50);
    this.y = random(50, height - 50);
    this.cnt = 0;
    this.n = random(2, 6);
    this.opacity = 250;
    this.time = 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  play() {
    if (this.cnt < this.n) {
      fill(this.color.r, this.color.g, this.color.b, this.opacity);
      noStroke();
      circle(this.x, this.y, this.d);
      if (this.time % 10 == 0) {
        this.x += 2 * this.d;
        // this.wait(1000);
        this.cnt++;
        this.opacity = this.opacity / 2;
      }
      this.time++;
    }
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
      for (let c = 0; c <= this.n; c++) {
        rect(this.posx, this.posy + (this.h + this.s) * c, this.w, this.h);
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

class expandingPolygon {
  constructor(n) {
    this.n = n;
    this.a = random(100, 200);
    this.x = random(50, width - 50);
    this.y = random(50, height - 50);
    this.opacity = 255;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.weight = random(3, 6);
  }
  play() {
    strokeWeight(this.weight);
    stroke(this.color.r, this.color.g, this.color.b, this.opacity);
    noFill();
    this.regularPolygon(this.x, this.y, this.n, this.a);
    this.a += 2;
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
