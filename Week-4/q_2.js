class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  teach(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
  }
}

const t1 = new Person("Ankit", 24);
t1.teach("Maths");
