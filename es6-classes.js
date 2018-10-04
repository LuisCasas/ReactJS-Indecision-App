
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
        return `${this.name} is ${this.age}`;
    }
}

const user1 = new Person('John Garcia', 35);

console.log(user1);
console.log(user1.getGreeting());
console.log(user1.getDescription());

const user2 = new Person();
console.log(user2);
console.log(user2.getGreeting());
console.log(user2.getDescription());