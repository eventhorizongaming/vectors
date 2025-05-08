class Vector {
  x; // The x value of the vector
  y; // The y value of the vector

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.hypot(this.x, this.y);
  }

  set length(v) {
    this.scale(v / this.length);
  }

  getLength() {
    return this.length;
  }

  setLength(v) {
    this.length = v;
  }

  scale(s) {
    this.x *= s;
    this.y *= s;
  }

  normalize() {
    this.length = 1;
  }

  getX() {
    return this.x;
  }

  setX(v) {
    this.x = v;
  }

  getY() {
    return this.y;
  }

  setY(v) {
    this.y = v;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  get angle() {
    return Math.atan2(this.y, this.x);
  }

  set angle(v) {
    this.set(Math.cos(v) * this.length, Math.sin(v) * this.length);
  }

  getAngle() {
    return this.angle;
  }

  setAngle(v) {
    this.angle = v;
  }
}

export { Vector as default, Vector, Vector as Vec};