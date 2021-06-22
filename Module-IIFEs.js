//IIFE-->Immediately Invoked Function Expression
//The concept is simple: write a function, wrap it in parentheses, and then immediately call the function by adding () to the end of it.
//Same as normal function the only difference is that in normal function we are invoking the function whenever we need while here we are invoking at the time of definition of function.

//Drawback of Normal Function
//it unnecessarily takes up a name in the global namespace, increasing the possibility of name collisions. 



//Without arguments
(function(){
    const foo="you";
    console.log(foo);
})();

//With arguments
let foo="Bar";
(function(){
    console.log(foo);
})(foo);

//With multiple arguments and using thick arrow function
let name="Harry";
let age=17;
(()=>{
    console.log(`Hello I am ${name} and i am ${age} years old.`)
})(name,age);

//assigning the IIFEs 
//IIFEs returning something

let myFunction=(()=>{
    return (`Hello I am ${name} and i am ${age} years old.`)
})(name,age);

console.log(myFunction);

//IIFEs returning other function

let anotherFunction=(()=>{
    return {publicMethod:function(){
        console.log(`Hello I am ${name} and i am ${age} years old.`)
    }}
})(name,age);

anotherFunction.publicMethod();

//IIFEs with private methods and properties
let otherFunction=(()=>{
    let name="Ron";
    let privateMethod=()=>{console.log(`Hello my name is ${name} and i am Harry's best friend.`)}
    return {publicMethod:function(){
        privateMethod();
    }}
})();
//Here we cant access the privateMethod and name but we can access public method
otherFunction.publicMethod();

//Revealing public module
//The Revealing Module Pattern is one of the most popular ways of creating modules. Using the return statement we can return a object literal that 'reveals' only the methods or properties we want to be publicly available.

var myModule=(()=>{
    let name="Hermoine";
    let age=17;

    let somePrivateMethod=()=>{
        return("I don't want to reveal my age.");
    }

    let somePublicMethod=()=>{
        console.log(`My name is ${name}.`);
        console.log(`And ${somePrivateMethod()}`);
    }

    return{
        name:name,
        somePublicMethod:somePublicMethod
    };
})();

console.log(myModule.name);
myModule.somePublicMethod();

