/* Create a bussiness name generator by combining list of adjectives abd shop name and another word

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

const adjectives={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
const shop_name={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}

const word={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}

const first_random=Math.floor((Math.random()*3)+1)
const first=adjectives[first_random]

const Second_random=Math.floor((Math.random()*3)+1)
const second=shop_name[Second_random]

const Third_random=Math.floor((Math.random()*3)+1)
const third=word[Third_random]

console.log(`${first} ${second} ${third}`)