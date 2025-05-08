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

    return this;
  }

  scale(s) {
    this.x *= s;
    this.y *= s;

    return this;
  }

  normalize() {
    this.length = 1;

    return this;
  }

  getX() {
    return this.x;
  }

  setX(v) {
    this.x = v;

    return this;
  }

  getY() {
    return this.y;
  }

  setY(v) {
    this.y = v;

    return this;
  }

  set(x, y) {
    this.x = x;
    this.y = y;

    return this;
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

    return this;
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  toArray() {
    return [this.x, this.y];
  }

  static add(vec1, vec2) {
    return new Vector(vec1.x + vec2.x, vec1.y + vec2.y);
  }

  static sub(vec1, vec2) {
    return new Vector(vec1.x - vec2.x, vec1.y - vec2.y);
  }

  static dot(vec1, vec2) {
    return (vec1.x * vec2.x) + (vec1.y * vec2.y);
  }

  static interpolate(vec1, vec2, amt) {
    return new Vector(vec1.x + (vec2.x - vec1.x) * amt, vec1.y + (vec2.y - vec1.y) * amt);
  }

  add(vec) {
    return Vector.add(this, vec);
  }

  sub(vec) {
    return Vector.sub(this, vec);
  }

  dot(vec) {
    return Vector.dot(this, vec);
  }
}

export { Vector as default, Vector, Vector as Vec};