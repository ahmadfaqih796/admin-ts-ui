export class UseAuth {
   name: string;
   age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }

   printMessage () {
      console.log(`Hello ${this.name}! You are ${this.age} years old.`);
      return `Hello ${this.name}! You are ${this.age} years old ccccccccccc.`
   }
}

// const coba = new UseAuth('faqih', 28);
// coba.printMessage();