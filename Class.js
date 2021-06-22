//Class added in ES6(ECMAScript 2015)
// They are template for creating objects
// Help us to achieve encapsulation
//One thing we should consider while working with classes is that they are not hoisted means we need to first declare the classes and then use it otherwise we get a reference error.While functions are hoisted.

//It is bit odd but the typeof of class is FUNCTION
//2 ways to define class just like functions

// 1. Class declaration
class Rectangle{
    //comes all the properties and functions
}

//2. Class expression
//Unnamed
let SomeRectangle=class{
    //comes all the properties and functions
}

//Named
let OtherRectangle = class Rectangle2 {
    //comes all the properties and functions
}

//The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.

//The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.
// super keyword to call the constructor of the super class.

//Rectangle Class

class AnotherRectangle{
    constructor(length,breadth){
        this.length=length;
        this.breadth=breadth;
    }

    //getter
    get area(){
        return this.calcArea();
    }

    //method
    calcArea(){
        return this.breadth*this.length;
    }

    
}

const rect= new AnotherRectangle(4,5);
rect.breadth=4;
rect.length=5;
rect.calcArea();

console.log(rect.area);


class Square{
    get side(){
        return this._side;
    }

    get perimeter(){
        return this.calcPerimeter();
    }

    get area(){
        return this.calcArea();
    }

    set side(value){
        this._side=value;
    }

    calcArea(){
        return this.side*this.side;
    }

    calcPerimeter(){
        return this.side*4;
    }
}

const square=new Square();
square.side=5;
//square.calcArea();
Square.prototype.calcArea();
square.calcPerimeter();

console.log(square.area);
console.log(square.perimeter);
console.log(square._side);
console.log(square.side);

console.log(Square.prototype.constructor===Square);


//Class Expression
//Unnamed
let User=class{
    constructor(name){
        this.name=name;
    }

    sayHi(){
        return `Hello my name is ${this.name}`;
    }
}

const usr= new User("Harry");
console.log(usr.name);
console.log(usr.sayHi());

//Named
let admin=class AdminClass{
    sayHi(){
        console.log(AdminClass);
    }
}

const admn=new admin();
console.log(admin);
//console.log(AdminClass);  //Throws an error as AdminClass is visible only inside class .


//We can even written a class from a function or in programming terms we can create dynamic classes on demand
function myClass(phrase){
    return class{
        sayHi(){
            console.log(phrase);
        }
    }
}

let Mycls=myClass("Hello");//This line will create a new class with the ame Mycls
new Mycls().sayHi();//Now we r creating an object of newly created class and calling sayHi()

//Class fields
// class fields is that they are set on individual objects, not Harry.prototype
class Harry{
    name="Harry";//This is known as class fields
    age=prompt("Age please!",0);

    sayHi(){
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    }
}

console.log(new Harry().name);
console.log(Harry.prototype.name);
new Harry().sayHi();

console.log("After changing the class field using name");
Harry.prototype.name="Ron";
console.log(new Harry().name);//Harry
console.log(Harry.prototype.name);//Ron
new Harry().sayHi();//Hello my name is Harry

//Making bound methods using class fields
class Button {
    constructor(value) {
      this.value = value;
    }
  
    click() {
      alert(this.value);
    }
  }
  
  let button = new Button("hello");
  
  setTimeout(button.click, 1000); // undefined

  class Button1 {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      alert(this.value);
    }
  }
  
  let button1 = new Button1("hello");
  
  setTimeout(button1.click, 1000); // hello


//Task
  class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();


  