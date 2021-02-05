function getPersons (){
   
    class Person{
        constructor(firstName, lastName, age, email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    }
    let arr = []

    let person1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let person2 = new Person('SoftUni');
    let person3 = new Person('Stepehn', 'Johnson', 25);
    let person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    arr.push(person1);
    arr.push(person2);
    arr.push(person3);
    arr.push(person4);

    return arr;
}

console.log(getPersons ());
