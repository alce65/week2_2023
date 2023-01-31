export class PersonClass {
  name;
  age;
  #isLive;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.#isLive = true;
  }

  greetings() {
    console.log(`Hola, soy ${this.name}`);
  }

  kill() {
    this.#isLive = false;
  }
}

const p3 = new PersonClass('Luisa', 34);
const p4 = new PersonClass('Rosa', 64);

p4.foo = 45;
delete p4.age;

console.log(p3, p4);

p3.greetings();
p3.kill();

// eslint-disable-next-line no-unused-vars
class Student extends PersonClass {
  course;
  // eslint-disable-next-line no-useless-constructor
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  greetings() {
    super.greetings();
    console.log(`Estudio ${this.course}`);
  }
}

const s1 = new Student('Ramón', 54, 'Angular');
s1.greetings();
