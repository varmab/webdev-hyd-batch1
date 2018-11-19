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

    showInterest(){
        console.log(this.balance * 8/100)
    }
}

var myAccount=new SavingsAccount("Varma");
myAccount.deposit(100);
myAccount.showBalance();
myAccount.withDraw(10);
myAccount.showBalance();
myAccount.showInterest();







