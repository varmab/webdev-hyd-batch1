var Calculator =require('./calculator');

var firstName="Varma";
console.log("Welcome " + firstName);

var calc=new Calculator();
console.log(calc.add(1,2))

function * sayHello(){
    yield("hello");
    yield("world")
}