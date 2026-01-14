// For each :- Not a loop keyword, but a method on arrays that runs a function for each element.

let arr=[1,2,3,5,4]

arr.forEach((value ,index , arr) => {
    console.log(value)
});

const obj={
    a:"Rohan",
    b:"Rahul",
    c:"Naman"
}

// for in :- Loops through the keys (property names) of an object
for(let key in obj){
    console.log(key,obj[key])
}

// for of :- Loops through values in iterable objects like arrays, strings, etc.
// only values not keys

for(let i of arr){
    console.log(i)
}

// In JavaScript, map, filter, and reduce are powerful array methods that let you process and transform data in concise, expressive ways. All three return new results and do not modify the original array.

// You want to change every element in some way (e.g., double all numbers, extract a property from objects)

let a=[1,2,3,4,5]

let square_a=a.map((x)=> x*x)
console.log(square_a)

// Filter() :- You want to select a subset of elements (e.g., keep only even numbers).

let greaterthanthree = a.filter(n=> n>3?true:false)
console.log(greaterthanthree)

// Use when: You need to aggregate values, like summing, counting, grouping, or building an object.

// const mul=(a,b)=>{
// return a*b;
// }

// let multiple=a.reduce(mul)
let multiple=a.reduce(mul=(acc,val)=> acc*val,1) // 1 is the initial product (becoz multiply 1 doesn't change the result)

console.log(multiple)

//   const result = [1,2,3,4,5]
//   result.filter(n => n % 2 === 0)      // [2, 4]
//   result.map(n => n * n)               // [4, 16]
//   result.reduce((sum, n) => sum + n, 0); // 20
//   console.log(result); // 20
