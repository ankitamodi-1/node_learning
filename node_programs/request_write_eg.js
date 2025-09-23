let http = require('http');

//////1 use  res.write
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World!');
//     res.end(JSON.stringify({
//       data: 'Hello World! ss',
//   }));

// }).listen(3000);

///////////2 first way
// const circle = require('./request_write_eg/circle');
// console.log("====================================");
// console.log(circle.area(5));          // Area with radius 5
// console.log(circle.circumference(5));
// console.log("====================================");


///////////2 second way
// console.log("====================================");
// const {area, circumference} = require('./request_write_eg/circle');
// console.log(area(5));          // Area with radius 5
// console.log(circumference(5));
//console.log("====================================");

//////////3 making class
console.log("====================================");
const Circle = require('./request_write_eg/circle_class');
const c = new Circle(5);   // radius = 5
console.log("Area:", c.area());
console.log("Circumference:", c.circumference());
console.log("====================================");
console.log(__dirname)
console.log(__filename)
