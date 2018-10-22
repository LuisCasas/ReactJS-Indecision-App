var name = 'Mike';
var name = 'John';
console.log(name);

let letName = 'Jack';
letName = 'Tom';
console.log(letName);

const CONST_NAME = 'George';
console.log(CONST_NAME);

function getPetName(){
    var pet = 'Cat';
    return pet;
}

const pet = getPetName();

console.log(pet);

// block scoping
const fullName = 'Mike Tyson';
let firstName;

if(fullName){
    // const would not work here
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);