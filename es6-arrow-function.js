// arrow functions part I

/*
const square = function(x){
    return x * x;
}
console.log(square(9))  ;

const squareArr = (x) => {
    return x * x;
}
console.log(squareArr(9));

const cube = (x) => x * x;
console.log(cube(2));
*/

/*
const fullName = 'John Garcia';

const getName = (name) => {
    return name.split(' ')[0];
};

console.log(getName(fullName));

const getNameShort = (name) => name.split(' ')[0];

console.log(getNameShort(fullName));
*/

// arrow functions part II

/*
const add = function (a, b){
    console.log(arguments);
    return a + b;
}
console.log(add(12, 55, 99));


const add = (a, b) => {
    //  console.log(arguments);
    return a + b;
}

console.log(add(12, 55));
*/

/*
const user = {
    name: 'John',
    cities: ['London', 'Edinburgh', 'Madrid'],
    printPlacesVisit: function(){
        const that = this; // this resolves access from the function below:
        this.cities.forEach(function(city){
            console.log(that.name + ' has visited: ' + city);
        });
    }
}
*/

/*
const user = {
    name: 'John',
    cities: ['London', 'Edinburgh', 'Madrid'],
    printPlacesVisit(){ // ES6 sysntax = function nameFunct()
        return this.cities.map((city) => this.name + ' visited: ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has visited: ' + city);
        // });
    }
}

console.log(user.printPlacesVisit());
*/

const multiplier = {
    numbers: [3,2,9,5],
    multiplyBy: 10,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());