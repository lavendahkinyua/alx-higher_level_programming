#!/usr/bin/node
/**
 * Square class that inherits from rectangle class
 */
class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }

  // Other methods of Rectangle class...
}

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}

module.exports = Square;
