
class Person{
    constructor(name = 'Unknown name', age = 0) {
        // console.log(name);
        // this.name = name || 'name undefined';
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        // return 'Hi there ' + this.name + '!';
        return `Hi there ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person{

    constructor(name, age, degree){
        super(name, age);
        this.degree = degree;
    }

    hasDgree(){
        return !!this.degree;
    }

    // equivelant of 
    getDescription(){
        let description = super.getDescription();

        if(this.hasDgree()){
            description += ` with degree on ${this.degree}`;
        }

        return description; //`${this.name} is ${this.age} years old.`;
    }    
}

class Traveller extends Person{

    constructor(name, age, city){
        super(name, age);
        this.city = city;
    }

    getGreeting(){
        let greetings = super.getGreeting();

        if(this.city){
            greetings += ` From the city of ${this.city}`;
        }

        return greetings;
    }
}

const traveller1 = new Traveller('Mike tyson', 43, 'New York');
console.log(traveller1.getGreeting());

const traveller2 = new Traveller('John', 23);
console.log(traveller2.getGreeting());

/*
const user1 = new Student('John Garcia', 35, 'Computer Science');
console.log(user1);
console.log(user1.getGreeting());
console.log(user1.getDescription());
console.log(user1.hasDgree());
*/

/*
const user2 = new Student();
console.log(user2);
console.log(user2.getGreeting());
console.log(user2.getDescription());
*/


