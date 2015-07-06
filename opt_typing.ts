
var p1 = { x: 1 };
//p1.y = 2; // compile error


var p2 : any = { x: 1 };
p2.y = 2;

interface P { x : number; y? : number }
var p3 : P = { x: 1 };
p3.y = 2;


