////first way to call
// const PI = Math.PI;

// function area(radius) {
//   return PI * radius * radius;
// }

// function circumference(radius) {
//   return 2 * PI * radius;
// }

// module.exports = { area, circumference };


/////export to every function ,second way to call
const PI = Math.PI;

exports.area = function(radius) {
  return PI * radius * radius;
}

exports.circumference = function (radius) {
  return 2 * PI * radius;
}


