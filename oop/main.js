function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.draw = function () {
    console.log('draw');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error('Invalid Location.');
      defaultLocation = value;
    },
  });
}

let circle1 = new Circle(10);
circle1.defaultLocation = { x: 1, y: 1 };
circle1.draw();
