function Book(title,author,no_of_pages,read){
    this.title=title;
    this.author=author;
    this.no_of_pages=no_of_pages;
    this.read=read;
    this.info=function(){
        return `${title} by ${author}, ${no_of_pages} pages, ${read} read yet.`;
    }
}

const thehobbit = new Book('The Hobbit','J.R.R Tolkien',295,"not");
console.log(thehobbit.info());
// console.log(thehobbit.constructor);
// console.log(thehobbit.prototype);

//Inheritance using Object and prototype
function Plant(){
    this.country="India";
    this.isOrganic=true;
    
}

Plant.prototype.sayNameAndColor=function(){
    console.log(`I am a ${this.name} and my color is ${this.color}.`);
}

Plant.prototype.amOrganic=function(){
    if(this.isOrganic){
        console.log("I am organic baby!");
    }
}

function Fruit(fruitName,fruitColor){
this.name=fruitName;
this.color=fruitColor;
}

Fruit.prototype=new Plant();

let banana=new Fruit("Banana","Yellow");
banana.amOrganic();
banana.sayNameAndColor();

//Prototype attribute
//Prototype chaining example 1
let myFriend={name:"Rinkesh"};

console.log(myFriend.name);
myFriend.toString();

//Prototype chaining example 2

function People(){
    this.superStar="Michael Jackson";
}

People.prototype.athlete="Tiger";

let famousPerson=new People();
console.log(famousPerson.superStar);
famousPerson.superStar="Steve Jobs";
console.log(famousPerson.superStar);

console.log(famousPerson.athlete);
console.log(famousPerson.toString());


//__proto__
// let animal={
//     eats:true
// };

// rabbit={
//     jumps:true
// };

// rabbit.__proto__=animal;

// alert(rabbit.eats);
// alert(rabbit.jumps);


//__proto__ example 2

// let animals={
//     eats:true,
//     walk(){
//         alert("Walking");
//     }
// };

// rabbits={
//     jumps:true,
//     __proto__:animals
// };



// alert(rabbits.eats);
// alert(rabbits.jumps);
// rabbits.walk();

// //__proto__ example 3
// let animals={
//     eats:true,
//     walk(){
//         alert("Walking");
//     }
// };

// rabbits={
//     jumps:true,
//     __proto__:animals
// };

// rabbits.walk=()=>alert("Rabbit bounce");

// rabbits.walk();

// //__proto__ example 4
// let user={
//     fName:"John",
//     lName:"Smith",


//     set fullName(value){
//         [this.fName,this.lName]=value.split(" ");
//     },

//     get fullName(){
//         return `${this.fName} ${this.lName}`;
//     }
// };

// let admin={
//     isAdmin:true,
//     __proto__:user
// }

// alert(admin.fullName);
// admin.fullName="Alice Cooper";

// alert(user.fullName);
// alert(admin.fullName);

// //__proto__example 5
// animal has methods
// let animal = {
//     walk() {
//       if (!this.isSleeping) {
//         alert(`I walk`);
//       }
//     },
//     sleep() {
//       this.isSleeping = true;
//     }
//   };
  
//   let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
//   };
  
//   // modifies rabbit.isSleeping
//   rabbit.sleep();
  
//   alert(rabbit.isSleeping); // true
//   alert(animal.isSleeping); // undefined (no such property in the prototype)

//   //Example 6

//   let animal={
//       eats:true
//   };

//   let rabbit={
//       jumps:true,
//       __proto__:animal
//   };

//   alert(Object.keys(rabbit));
//   for(let prop in rabbit) alert(prop);


// //   //Example 7
//   let animal = {
//     eats: true
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);
  
//     if (isOwn) {
//       alert(`Our: ${prop}`); // Our: jumps
//     } else {
//       alert(`Inherited: ${prop}`); // Inherited: eats
//     }
//   }


// function Student(){

// }

// Student.prototype.sayName=function(){
//     console.log(this.name);
// }

// function EightGrader(name){
//     this.name=name;
//     this.grade=8;
// }

// EightGrader.prototype=Object.create(Student.prototype);

// const carl=new EightGrader("carl");
// carl.sayName();

// let a=17;
// let change=(x)=>{
//   a = x;
// };

// change(99);
// console.log(a);

//the difference between defining methods via the prototype vs defining them in the constructor.

// If your methods do not use local variables defined in your constructor (your example doesn't), then use the prototype approach.

// If you're creating lots of Objects, use the prototype approach. This way, all "instances" (i.e. objects created by the object constructor) will share one set of functions, whereas the constructor way, a new set of functions is created every time the object constructor is called, using more memory.

// If you're creating a small number of objects and find that using local, "private" variables in your constructor improves your code, this may be the better approach. Use your judgment and do some benchmarks if performance or memory consumption are major concerns.

// For example, the code below uses a local variable in the constructor to keep track of the number of times this dog has barked while keeping the actual number private, so the barking-related methods are defined inside the constructor. Tail wagging does not require access to the number of barks, therefore that method can be defined on the prototype.

var Dog = function(name) {
    this.name = name;

    var barkCount = 0;

    this.bark = function() {
        barkCount++;
        alert(this.name + " bark");
    };

    this.getBarkCount = function() {
        alert(this.name + " has barked " + barkCount + " times");
    };
};

Dog.prototype.wagTail = function() {
    alert(this.name + " wagging tail");
};

var dog = new Dog("Dave");
dog.bark();
dog.bark();
dog.getBarkCount();
dog.wagTail();



