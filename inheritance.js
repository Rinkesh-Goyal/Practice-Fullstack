window.onload=(event)=>{
    class Animal {
        constructor(name) {
          this.name = name;
        }
      
        speak() {
          console.log(`${this.name} makes a noise.`);
        }
      }
      
      class Dog extends Animal {
        constructor(name) {
          super(name); // call the super class constructor and pass in the name parameter
        }
      
        speak() {
          console.log(`${this.name} barks.`);
        }
      }
      
      let d = new Dog('Mitzie');
      d.speak(); // Mitzie barks.

    //   If there is a constructor present in the subclass, it needs to first call super() before using "this".

    function Animal2 (name) {
        this.name = name;
      }
      
      Animal2.prototype.speak2 = function () {
        console.log(`${this.name} makes a noise.`);
      }
      
      class Dog2 extends Animal2 {
        speak2() {
          console.log(`${this.name} barks.`);
        }
      }
      
      let d = new Dog2('Mitzie');
      d.speak2(); // Mitzie barks.

    //   Note that classes cannot extend regular (non-constructible) objects. If you want to inherit from a regular object, you can instead use Object.setPrototypeOf()

    const Animal3 = {
        speak3() {
          console.log(`${this.name} makes a noise.`);
        }
      };
      
      class Dog3 {
        constructor(name) {
          this.name = name;
        }
      }
      
      // If you do not do this you will get a TypeError when you invoke speak
      Object.setPrototypeOf(Dog3.prototype, Animal3);
      
      let d = new Dog3('Mitzie');
      d.speak3(); // Mitzie makes a noise.
}

