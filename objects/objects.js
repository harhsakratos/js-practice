//singleton - created when constructor called
// Object.create

// object literals

let mySym = Symbol("hi1") 

const User = {
    name:'harsha',
    "fullName":"harsha Madagiri",
    age:24,
    location:'hyderabad',
    isLogged:true,
    lastLoginDays:['monday','thursday'],
    [mySym]:'hi2'
}

const User2 = {
    name:'bharath'
}

// console.log(User.age)
// console.log(User["fullName"])

User.greeting = function(){
    console.log("hello")
}


User.greetings2 = function(){
    console.log(`Hello ${this.name}`)
}

User2.greetings3 = function(){
    console.log(`Hello ${this.name}`)
}


console.log(User)
console.log(User2);

console.log(User.greetings2())
console.log(User2.greetings3());
// console.log(User2.greetings2());


