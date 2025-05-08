/**
 * Represents a 2D vector with x and y components.
 */
class Vector {
  /**
   * The x value of the vector.
   * @type {number}
   */
  x;

  /**
   * The y value of the vector.
   * @type {number}
   */
  y;

  /**
   * Creates a new Vector instance.
   * @param {number} x - The x value of the vector.
   * @param {number} y - The y value of the vector.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Gets the length (magnitude) of the vector.
   * @type {number}
   * @readonly
   */
  get length() {
    return Math.hypot(this.x, this.y);
  }

  /**
   * Sets the length (magnitude) of the vector.
   * @param {number} v - The new length of the vector.
   */
  set length(v) {
    this.scale(v / this.length);
  }

  /**
   * Gets the length (magnitude) of the vector.
   * @returns {number} The length of the vector.
   */
  getLength() {
    return this.length;
  }

  /**
   * Sets the length (magnitude) of the vector.
   * @param {number} v - The new length of the vector.
   * @chainable
   */
  setLength(v) {
    this.length = v;
    return this;
  }

  /**
   * Scales the vector by a scalar value.
   * @param {number} s - The scalar value to scale the vector by.
   * @chainable
   */
  scale(s) {
    this.x *= s;
    this.y *= s;
    return this;
  }

  /**
   * Normalizes the vector to have a length of 1.
   * @chainable
   */
  normalize() {
    this.length = 1;
    return this;
  }

  /**
   * Gets the x value of the vector.
   * @returns {number} The x value of the vector.
   */
  getX() {
    return this.x;
  }

  /**
   * Sets the x value of the vector.
   * @param {number} v - The new x value of the vector.
   * @chainable
   */
  setX(v) {
    this.x = v;
    return this;
  }

  /**
   * Gets the y value of the vector.
   * @returns {number} The y value of the vector.
   */
  getY() {
    return this.y;
  }

  /**
   * Sets the y value of the vector.
   * @param {number} v - The new y value of the vector.
   * @chainable
   */
  setY(v) {
    this.y = v;
    return this;
  }

  /**
   * Sets both the x and y values of the vector.
   * @param {number} x - The new x value of the vector.
   * @param {number} y - The new y value of the vector.
   * @chainable
   */
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * Gets the angle of the vector in radians.
   * @type {number}
   * @readonly
   */
  get angle() {
    return Math.atan2(this.y, this.x);
  }

  /**
   * Sets the angle of the vector in radians.
   * @param {number} v - The new angle in radians.
   */
  set angle(v) {
    this.set(Math.cos(v) * this.length, Math.sin(v) * this.length);
  }

  /**
   * Gets the angle of the vector in radians.
   * @returns {number} The angle of the vector in radians.
   */
  getAngle() {
    return this.angle;
  }

  /**
   * Sets the angle of the vector in radians.
   * @param {number} v - The new angle in radians.
   * @chainable
   */
  setAngle(v) {
    this.angle = v;
    return this;
  }

  /**
   * Creates a clone of the current vector.
   * @returns {Vector} A new vector with the same x and y values.
   * @chainable
   */
  clone() {
    return new Vector(this.x, this.y);
  }

  /**
   * Converts the vector to an array.
   * @returns {number[]} An array containing the x and y values of the vector.
   */
  toArray() {
    return [this.x, this.y];
  }

  /**
   * Adds two vectors together.
   * @param {Vector} vec1 - The first vector.
   * @param {Vector} vec2 - The second vector.
   * @returns {Vector} A new vector that is the sum of the two vectors.
   */
  static add(vec1, vec2) {
    return new Vector(vec1.x + vec2.x, vec1.y + vec2.y);
  }

  /**
   * Subtracts one vector from another.
   * @param {Vector} vec1 - The vector to subtract from.
   * @param {Vector} vec2 - The vector to subtract.
   * @returns {Vector} A new vector that is the difference of the two vectors.
   */
  static sub(vec1, vec2) {
    return new Vector(vec1.x - vec2.x, vec1.y - vec2.y);
  }

  /**
   * Calculates the dot product of two vectors.
   * @param {Vector} vec1 - The first vector.
   * @param {Vector} vec2 - The second vector.
   * @returns {number} The dot product of the two vectors.
   */
  static dot(vec1, vec2) {
    return vec1.x * vec2.x + vec1.y * vec2.y;
  }

  /**
   * Interpolates between two vectors by a given amount.
   * @param {Vector} vec1 - The starting vector.
   * @param {Vector} vec2 - The ending vector.
   * @param {number} amt - The interpolation amount (0 to 1).
   * @returns {Vector} A new vector that is the interpolated result.
   */
  static interpolate(vec1, vec2, amt) {
    return new Vector(
      vec1.x + (vec2.x - vec1.x) * amt,
      vec1.y + (vec2.y - vec1.y) * amt
    );
  }

  /**
   * Adds another vector to the current vector.
   * @param {Vector} vec - The vector to add.
   * @returns {Vector} A new vector that is the sum of the two vectors.
   * @chainable
   */
  add(vec) {
    return Vector.add(this, vec);
  }

  /**
   * Subtracts another vector from the current vector.
   * @param {Vector} vec - The vector to subtract.
   * @returns {Vector} A new vector that is the difference of the two vectors.
   * @chainable
   */
  sub(vec) {
    return Vector.sub(this, vec);
  }

  /**
   * Calculates the dot product of the current vector and another vector.
   * @param {Vector} vec - The other vector.
   * @returns {number} The dot product of the two vectors.
   * @chainable
   */
  dot(vec) {
    return Vector.dot(this, vec);
  }
}

export { Vector as default, Vector, Vector as Vec };
