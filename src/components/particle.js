function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default class Particle {
  constructor(bounds, alphaFactor) {
    this.bounds = bounds;
    this.reset(true);
    this.calcS(bounds, alphaFactor);
  }

  calcS(bounds, alphaFactor) {
    this.s = bounds.depth / (bounds.depth + this.z);
    this.sx = this.x * this.s;
    this.sy = this.y * this.s;
    this.alpha = (alphaFactor * (bounds.z.max - this.z)) / (bounds.z.max / 2);
  }

  reset(init = false) {
    this.z = init ? random(0, this.bounds.z.max) : this.bounds.z.max;
    const depth = this.bounds.depth / (this.bounds.depth + this.z);

    this.x = random(this.bounds.x.min, this.bounds.x.max) / depth;
    this.y = random(this.bounds.y.min, this.bounds.y.max) / depth;
    this.ox = this.x;
    this.oy = this.y;
    this.oz = this.z;
    this.vx = 0;
    this.vy = 0;
    this.vz = random(-10, -15);
    this.ax = 0;
    this.ay = 0;
    this.az = 0;
    this.s = 0;
    this.sx = 0;
    this.sy = 0;
    this.os = this.s;
    this.osx = this.sx;
    this.osy = this.sy;
    this.hue = random(120, 200);
    this.lightness = random(70, 100);
    this.alpha = 0;
  }

  update() {
    this.vx += this.ax;
    this.vy += this.ay;
    this.vz += this.az;

    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;

    if (
      this.sx - this.sr > this.bounds.x.max ||
      this.sy - this.sr > this.bounds.y.max ||
      this.z > this.bounds.z.max ||
      this.sx + this.sr < this.bounds.x.min ||
      this.sy + this.sr < this.bounds.y.min ||
      this.z < this.bounds.z.min
    ) {
      this.reset();
    }

    this.ox = this.x;
    this.oy = this.y;
    this.oz = this.z;
    this.os = this.s;
    this.osx = this.sx;
    this.osy = this.sy;
  }
}
