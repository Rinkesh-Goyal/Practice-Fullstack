//A factory function is any function which is not a class or constructor that returns a (presumably new) object. In JavaScript, any function can return an object. When it does so without the new keyword, it's a factory function.

//var variables are **function scoped** and remember, there's no function here, it's going to be **globally scoped**. It's scoped to the entire window, which is a little bit of a pain here. That is one of the benefits to using let and const. Instead of being scoped to the function, it is block scoped, which is something new.
var age = 100;
if(age > 12) {
  //var dogYears = age * 7;//function scope
    let dogYears = age * 7;//blocked scope
  console.log(`You are ${dogYears} dog years old!`);
}
// console.log(dogYears);


//Factory Function
const person=(name,age)=>{
    const sayHello=()=>{console.log(`Hello ${name} u r ${age} years old.`)}
    return {name,age,sayHello};
}

const p = person("Rinkesh",26);
console.log(p.name);
console.log(p.age);

p.sayHello();

//Private variables and closure
//closure whenever we want to call a function from factory function we need to return it as The concept of closure is the idea that functions retain their scope even if they are passed around and called outside of that scope. In this case, printString has access to everything inside of FactoryFunction, even if it gets called outside of that function.
//Here string is a private variables

//capitalize is private function(not accessible out isde factory function) while printString is public function
const FactoryFunction = (string) => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
    //return{printString,capitalizeString};//To call capitalize using taco
  };
  
  const taco = FactoryFunction('taco');
  
  //printString(); // ERROR!!
  //capitalizeString(); // ERROR!!
  //taco.capitalizeString(); // ERROR!!
  taco.printString(); // this prints "----TACO----"


  //Example 2
  //Here count is a private variable and counter is factory function that is counting how many times counter is called.

  //the function 'c' is a closure. It has access to the variable count and can both print and increment it, but there is no other way for our program to access that variable.
  const counter=()=>{
      let count=0;
      return ()=>{
        console.log(count);
        count++;
      };
  }
  
  const c = counter();
  c();
  c();
  c();
  c();
  

  //Simple game
     const Player=(name,level)=>{
        let health=level*2;
        const getName=()=>name;
        const getLevel=()=>level;
        const die=()=>{};

     const damage=(x)=>{
        health-=x;
        if(health<=0){
            die();
        }
     };

     const attack=(enemy)=>{
         if(level<enemy.getLevel()){
             damage(1);
             alert(`${enemy.getName()} has damaged ${name}`);
         }

         if(level>=enemy.getLevel()){
            enemy.damage(1);
            alert(`${name} has damaged ${enemy.getName()}`);
        }
     };
     return{attack,damage,getLevel,getName};
  };

  const harry=Player("Harry",1);
  const voldemort=Player("Voldemort",5);
  harry.attack(voldemort);
  voldemort.attack(harry);
  voldemort.attack(harry);
  voldemort.attack(harry);
  voldemort.attack(harry);
  voldemort.attack(harry);
  voldemort.attack(harry);
//   harry.die();//since we are not returning die method this will throw an error
  harry.damage(5);

//Inheritance in factory function

//Inheriting only single property
  const Person=(name)=>{
    const sayName=()=>{
        console.log(`Hello my name is ${name}`);
    }
    return {sayName};
  };

//   const Nerd=(name)=>{
//     const {sayName}=Person(name);
//     const doSomethingNerdy=()=>{console.log(`nerd stuff`);}
//     return {sayName,doSomethingNerdy};
//   }

//   const ron = Nerd("Ron");
//   ron.sayName();
//   ron.doSomethingNerdy();


  //Inheritting  multiple properties
  const Nerd2 =(name)=>{
      const prototype = Person(name);
      const doSomethingNerdy=()=>{console.log(`nerd stuff`);}
      return Object.assign({},prototype,{doSomethingNerdy});
  }

  const hermoine = Nerd2("Hermoine");
  hermoine.sayName();
  hermoine.doSomethingNerdy();


  