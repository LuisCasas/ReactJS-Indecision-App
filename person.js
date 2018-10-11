const isAdult = (age) => age >= 18;
const canDrive = (age) => age >= 21;
const isSeniorPerson = (age) => age >= 65;

export {isAdult, canDrive, isSeniorPerson as default};