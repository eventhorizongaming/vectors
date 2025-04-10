class Vector {
  x; // The x value of the vector
  y; // The y value of the vector

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  scale(s) {
    this.x *= s;
    this.y *= s;
  }

  get length() {
    return Math.hypot(this.x, this.y);
  }

  set length(val) {
    this.scale(val / this.length);
  }
}

export { Vector as default, Vector, Vector as Vec};