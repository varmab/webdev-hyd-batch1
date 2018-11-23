function makeCounter()
{
    var counter=0;

    return function(){
        return counter++;
    } 
}

var counter=makeCounter();
console.log(counter())
console.log(counter())
console.log(counter())

try {
    var a;
    throw new Error('Whoops!');
}
catch(err){
    console.log("Error:" + err)
}
finally {
    console.log("finally executed")
}

//call and apply
//bind
//map, reduce

var varma={
    name:"Varma",
    marks:30
}

function add(a,b){
    return a + b;
}

console.log(add(1,2));

console.log(add.call(varma,1,2));
console.log(add.apply(varma,[1,2]));
console.log(add(1,2));

var marks=[35,30,23];

var modifiedMarks=marks.map((mark)=>{
    return mark+10;
})

console.log(modifiedMarks)

var movies=[
    {
        title:"Bahubali",
        actor:"Prabhas"
    },
    {
        title:"Adhurs",
        actor:"NTR"
    },
    {
        title:"Kushi",
        actor:"PavanKalyan"
    }
]

var actors=movies.map((movie)=>{
    return movie.actor;
})

console.log(actors)

var titles=movies.map((movie)=>{
    return movie.title;
})

console.log(titles)

var totalMarks=marks.reduce((total,mark)=>{
    return total+mark;
})

console.log(totalMarks)

var actorsList=movies.reduce((actors,movie)=>{
    return actors + movie.actor + ","
},'')

console.log(actorsList);

var objMovies=movies.reduce((obj,movie)=>{
        obj[movie.title]=movie.actor;
        return obj;
},{})

console.log(objMovies)

// {
//     "Bahubali":"Prabhas",
//     "Adhurs":"NTR",
//     "Kushi":"Pavan Kalyan"
// }



