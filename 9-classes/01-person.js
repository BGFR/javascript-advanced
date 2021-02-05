//01. Person
class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    };
}

const myPerson = new Person ('Anna', 'Simpson', 23, 'ana@yahoo.com');

console.log(myPerson);
console.log('' + myPerson);
console.log(`${myPerson}`);
console.log(myPerson.toString());

console.log(myPerson instanceof Person);
