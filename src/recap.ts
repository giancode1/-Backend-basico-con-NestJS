const myName = 'Gian';
myName.charAt(0);

const myAge = 11;
console.log(myAge);

const suma = (a: number, b: number) => {
  return a + b;
};
suma(5, 6);

class Persona {
  private age;
  // name; //public por defecto
  private name;
  alias;

  constructor(name: string, age: number, alias: string) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }

  getSumary() {
    return `my name is ${this.name} and my age is ${this.age}`;
  }
}

const gian = new Persona('gian', 15, 'giancode1');
console.log(gian.getSumary());
console.log(gian.alias);
