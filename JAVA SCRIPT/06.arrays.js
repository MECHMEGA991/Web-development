let arr=[1,2,3,4,5]

// Arrays are mutable and type is object 
console.log(arr)
console.log(arr.length)

arr[0]=566
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])


console.log(arr,typeof arr) // change the value of exiting array 

// for(i=0;i<arr.length;i++){ using loop accessing array
//     console.log(arr[i])
// }

// Methods
console.log(arr.toString()) // Change in string 
console.log(arr.toSorted()) // sorted in ascending order

console.log(arr.join(" and ")) // joining 
console.log(arr.pop()) // return last element

arr.push("Harry") // Push at ending
console.log(arr)

arr.shift() // Remove first element 
console.log(arr)

arr.unshift(100) // Add at starting
console.log(arr)

delete arr[2]
console.log(arr) // It delete the element but the length is same 

// Concate do not change existing array

let b=[5,6,7,8]
let c=[9,10,11,12,13]

console.log(b.concat(c))

b.splice(1,2,10,20) // It removes the elements from array not slice 
console.log(b)

console.log(c.slice(1,4))
