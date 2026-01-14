// Funtion ;- It is a block of code 

function nice(name){
    console.log("Hey " + name + ", you are awesome!");
}

nice("Ankush")
nice("Ram")
nice("Harry")

// Return type

function add(a,b,c=5){ // c is default parameter
    return a+b+c;
}

result=add(9,10)
console.log("The sum of Number is "+result)
result=add(9,10,10)
console.log("The sum of Number is "+result)

const func1 =(x)=>{
    console.log("I am a arrow function",x)
}

func1(55)
func1(88)