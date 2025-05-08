# Vectors

![GitHub file size in bytes](https://img.shields.io/github/size/eventhorizongaming/vectors/index.min.js?label=Build)

A small, 2D vector library

# Documentation

The Vector class represents a 2D vector with x and y components. It provides various methods and properties to manipulate and perform operations on vectors.

## Features

- Create and manipulate 2D vectors.
- Perform vector operations such as addition, subtraction, scaling, and normalization.
- Access and modify vector properties like length and angle.
- Static methods for common vector operations.

## Installation
To use the Vector class in your project, import it as follows:

```javascript
// All of these imports are the same
import Vector, { Vector, Vec } from './index.js';
import Vector, { Vector, Vec } from './index.min.js';
```

## Usage

### Creating a Vector

```javascript
const vector = new Vector(3, 4);

console.log(vector.x); // 3 
console.log(vector.y); // 4
```

### Accessing and Modifying Properties
Length (Magnitude):

```javascript
console.log(vector.length); // 5
vector.length = 10; // Scales the vector to have a length of 10 
```

Angle:

```javascript
console.log(vector.angle); // Angle in radians
vector.angle = Math.PI / 4; // Sets the angle to 45 degrees
```

### Methods

Scaling:

```javascript
vector.scale(2); // Scales the vector by 2
```

Normalization:

```javascript
vector.normalize(); // Normalizes the vector to have a length of 1
```

Setting Values:

```javascript
vector.setX(3); // Sets the x to 3
vector.setY(4); // Sets the y to 4
vector.set(5, 6); // Sets x to 5 and y to 6
```

Cloning:

```javascript
const clone = vector.clone(); // Creates a new vector with the same x and y values
```

Conversion to Array:

```javascript
console.log(vector.toArray()); // [x, y]
```

Static Methods
Addition:

```javascript
const vec1 = new Vector(1, 2);
const vec2 = new Vector(3, 4);
const result = Vector.add(vec1, vec2); // New vector (4, 6)
```

Subtraction:

```javascript
const vec1 = new Vector(1, 2);
const vec2 = new Vector(3, 4);
const result = Vector.sub(vec1, vec2); // New vector (-2, -2)
```

Dot Product:

```javascript
const vec1 = new Vector(1, 2);
const vec2 = new Vector(3, 4);
const dot = Vector.dot(vec1, vec2); // Dot product (11)
```

Interpolation:

```javascript
const vec1 = new Vector(1, 2);
const vec2 = new Vector(3, 4);
const interpolated = Vector.interpolate(vec1, vec2, 0.5); // New vector (2, 3)
```

### Chainable Methods

Most methods in the Vector class are chainable, allowing for concise and fluent code:

```javascript
vector.clone().set(1, 2).setAngle(Math.PI).normalize().toArray();
```

## API Reference

### Properties
- `x` (number): The x-component of the vector.
- `y` (number): The y-component of the vector.
- `length` (number): The magnitude of the vector (read/write).
- `angle` (number): The angle of the vector in radians (read/write).

### Methods

Instance Methods
- `getX()`: Returns the x-component.
- `setX(value)`: Sets the x-component.
- `getY()`: Returns the y-component.
- `setY(value)`: Sets the y-component.
- `set(x, y)`: Sets both x and y components.
- `getLength()`: Returns the length of the vector.
- `setLength(value)`: Sets the length of the vector.
- `getAngle()`: Returns the angle of the vector.
- `setAngle(value)`: Sets the angle of the vector.
- `scale(scalar)`: Scales the vector by a scalar.
- `normalize()`: Normalizes the vector to a length of 1.
- `clone()`: Creates a new vector with the same x and y values.
- `toArray()`: Converts the vector to an array.

Static Methods
- `add(vec1, vec2)`: Adds two vectors.
- `sub(vec1, vec2)`: Subtracts one vector from another.
- `dot(vec1, vec2)`: Calculates the dot product of two vectors.
- `interpolate(vec1, vec2, amt)`: Interpolates between two vectors.

## License
This project is licensed under the MIT license.  See the [LICENSE file](./LICENSE) for more info.
