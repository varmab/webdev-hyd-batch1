//import Calculator from './calculator';

let p=10;

if(true){
    let p=18;
}

console.log(p)

const PI=3.14;

// PI=33.3//throws error

const car={
    model:"Nissan",
    milage:18
}

car.model="Toyota"; //OK
car.price=10000;
delete car.model;

// car={
//     name:"Varma"
// }


//Default paramaters
//ES5
// var add=(a,b)=>{
//     b=b||0;
//     a=a||0;
//     return a+b;
// }
//ES6
var add=(a=0,b=0)=>{
    return a+b;
}

var city="Hyderabad"
var postalCode="500072"
var csAddress=`
    Coding Sastra <b>Hyderabad</b>
    LIG 648, KPHB,
    ${city},${postalCode}
`
console.log(csAddress);

var total=(...x)=>{
    return x.reduce((total,n)=>{
        return total+n;
    })
}

var y=[2,4,6];
[p,q,r]=y;

class Account {
    constructor(name){
        this.name=name;
        this.balance=0;
    }

    deposit(amt){
        this.balance+=amt;
    }

    withDraw(amt){
        this.balance-=amt;
    }

    showBalance(){
        console.log(this.balance)
    }
}


class SavingsAccount extends Account{
    constructor(name){
        super(name);
    }

    addInterest(){
        this.deposit(10);
        console.log(this.balance)
    }
}

var myAccount=new SavingsAccount("Varma");
myAccount.deposit(100);
// myAccount.showBalance();
// myAccount.withDraw(10);
// myAccount.showBalance();
myAccount.addInterest();


var add2=(a)=>{
    return (b)=>{
        return a+b;
    }
}

function * sayHello(){
    yield("hello");
    yield("world")
}

var hello= sayHello();


var a=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("calling a")
            resolve("success")
        },5000)
    })
}

var b=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("calling b")
            resolve("success")
        },5000)
    })
    
}

var c=()=>{
    console.log("calling c")
}

a()
.then(b)
.then(c)
.catch((err)=>{
    console.log("error")
});


//Cookies - Permenant

//sessionStorage -- Temporary for Browser session
//localStorage -- Permenant until you delete

var user={
    id:"1",
    name:"Varma"
}

// sessionStorage.setItem("user",JSON.stringify(user))
// sessionStorage.getItem("user");
// sessionStorage.removeItem("user");

// localStorage











