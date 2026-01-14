let a = "Harry";
console.log(a)

console.log(a[0])  // Index accessing
console.log(a[1])
console.log(a[2])

console.log(a.length) // Length of string

let real_name ="Rahul"
let freind="Ramesh"

console.log("His name is "+ real_name + " and his friend name is "+freind) // Normal

// Using template literals 
console.log(`His name is ${real_name} and his friend name is ${freind}`)

// Escape sequence character

b= "\"Harry\" bhai" // Getting " " btw word
console.log(b)

let c="Shivam Sh"
console.log(c.toUpperCase())
console.log(c.toLowerCase())
console.log(c.length)

console.log(c.slice(1,5))
console.log(c.replace("Sh","89")) // First Occurence will only replace
console.log(c.concat(a))

d="  vansh  "
let new_d=d.trim()
console.log(new_d) // Removing white space from front and back not btw word

console.log(c.indexOf("i")) // Tells the index of char
console.log(c.charAt(0))

// String are immutable means we cant change the existing string 
console.log(c) // Existing string cannot change

str="Rahul"

console.log(str.includes("hul"))
console.log(str.startsWith("a"))
console.log(str.endsWith("ul"))


